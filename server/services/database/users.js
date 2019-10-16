const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const getUserByEmail = email => {
  return new Promise(resolve => {
    pool.query(
      "SELECT * FROM users where email = $1",
      [email],
      (error, result) => {
        resolve(result.rows[0]);
      }
    );
  });
};

const createUser = ({ name, email, password }) => {
  return getUserByEmail(email)
    .then(users => {
      return new Promise((resolve, reject) => {
        if (users) {
          reject("An account with the same email address already exists");
        } else {
          resolve();
        }
      });
    })
    .then(async () => {
      const client = await pool.connect();
      try {
        await client.query("BEGIN");
        const queryText =
          "INSERT INTO users (name,email, password) values ($1,$2,$3) RETURNING id";

        const res = await client.query(queryText, [name, email, password]);

        await client.query("COMMIT");
      } catch (e) {
        await client.query("ROLLBACK");
        throw "Someting went wrong";
      } finally {
        client.release();
      }
    });
};

const getUserById = id => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM users where id = $1", [id], (error, result) => {
      if (error) {
        console.error(error);
        return reject(error);
      }
      resolve(result.rows[0]);
    });
  });
};

module.exports = {
  getUserById,
  createUser,
  getUserByEmail
};
