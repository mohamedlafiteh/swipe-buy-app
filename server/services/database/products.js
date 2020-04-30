const { Pool } = require("pg");
const config = require("../../config");
const pool = new Pool(config);

const listProducts = async () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM products", (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result.rows);
    });
  });
};

const getProductById = async productId => {
  const query = "SELECT * FROM products WHERE id = $1";
  return new Promise((resolve, reject) => {
    pool.query(query, [productId], (error, result) => {
      if (error) {
        reject(error);
      }
      resolve(result.rows);
    });
  });
};

const createProduct = async (
  image,
  title,
  price,
  description,
  company,
  incart
) => {
  const prices = Number(price);
  if (
    title.length !== 0 &&
    typeof prices === "number" &&
    description.length !== 0
  ) {
    const query =
      "INSERT INTO products (image,title,price,description,company,incart) values ($1,$2,$3,$4,$5,$6)";

    return new Promise((resolve, reject) => {
      pool.query(
        query,
        [image, title, price, description, company, incart],
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result.rows);
        }
      );
    });
  } else {
    throw Error;
  }
};

const deleteProduct = async productId => {
  const query = "DELETE FROM products WHERE id = $1";
  return new Promise((resolve, reject) => {
    pool.query(query, [productId], (error, result) => {
      if (error) {
        reject(error);
      }
      resolve("deleted");
    });
  });
};

const updateProduct = async (content, productId) => {
  const query = "UPDATE products SET title=$1 WHERE id=$2";
  return new Promise((resolve, reject) => {
    pool.query(query, [content, productId], (error, result) => {
      if (error) {
        reject(error);
      }
      resolve("updated");
    });
  });
};
module.exports = {
  listProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  getProductById
};
