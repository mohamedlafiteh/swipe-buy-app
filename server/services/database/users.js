const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const createUser = ({ name, email, password, city }) => {
  const client = pool.connect();

  const queryText =
    "INSERT INTO users (name,email,password,city) values ($1, $2,$3,$4) RETURNING id";

  client.query(queryText, [name, email, password, city]);
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
  createUser
};
