// const passport = require("passport");
const prodsDB = require("../services/database/products");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  prodsDB
    .listProducts()
    .then(r => {
      return res.send(r);
    })
    .catch(e => {
      res.status(400).send({
        e: e
      });
      return res.status(400).send(" alert there is error insert product");
    });
});

router.post("/", (req, res) => {
  const { title, price, description } = req.body;

  console.log(title, price, description);
  prodsDB
    .createProduct(title, price, description)
    .then(response => {
      return res.send({
        message: "created successfully"
      });
    })
    .catch(e => {
      console.log("this is ht error mo" + e);
      res.status(400).send({
        message: "ERROR in getting data",
        error: e
      });
    });
});

module.exports = router;
