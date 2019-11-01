const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const listProducts = async () => {
  return new Promise(resolve => {
    pool.query("SELECT * FROM products", (error, result) => {
      if (error) {
      }
      resolve(result.rows);
    });
  });
};
const createProduct = (title, price, description) => {
  const query =
    "INSERT INTO products (title,price,description) values ($1,$2,$3)";

  return pool
    .query(query, [title, price, description])
    .then(result => result.rows);
};

module.exports = { listProducts, createProduct };
