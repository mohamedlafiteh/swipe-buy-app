const { Pool } = require("pg");
const config = require("../..config");
const pool = new Pool(config);

const createProduct = (id, title, price, description) => {
  const query =
    "INSERT INTO products (id,title,price,description) values ($1,$2,$3,$4)";
  return pool
    .query(query, [id, title, price, description])
    .then(result => result.rows);
};

module.exports = { createProduct };
