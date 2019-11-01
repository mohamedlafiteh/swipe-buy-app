const express = require("express");
const router = express.Router();
const status = require("./status");
const products = require("./products");
// for the index.js file url we dont need to write api/index only because the name is
//index and by default is index but for the other names have to be specific api/products

router.use("/status", status);
router.use("/products", products);

// router.get("/status/db", (req, res) => {
//   // TODO: write code for PSQL health
// });

// router.get("/hello", (req, res) => {
//   res.status(200).send(`Hello ${req.query.name}!`);
// });

// router.get("/products", (req, res) => {
//   res.status(200).send(`products`);
// });

module.exports = router;
