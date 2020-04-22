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

router.get("/:productId", (req, res) => {
  const productId = req.params.productId;

  prodsDB
    .getProductById(productId)
    .then(re => {
      return res.send(re[0]);
    })
    .catch(e => {
      res.status(404).send({
        ERROR: "there is error in updating product",
        error: e
      });
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
      console.log("this is error in inserting data" + e);
      res.status(400).send({
        message: "ERROR in inserting data",
        error: e
      });
    });
});

router.delete("/:productId", (req, res) => {
  const productId = req.params.productId;
  console.log(" this is the product id " + productId);
  prodsDB
    .deleteProduct(productId)
    .then(re => {
      return res.send({
        message: "product deleted successfully"
      });
    })
    .catch(e => {
      res.status(404).send({
        ERROR: "there is error in deleting product",
        error: e
      });
    });
});

router.put("/:productId", (req, res) => {
  const productId = req.params.productId;
  const content = req.body.title;

  prodsDB
    .updateProduct(content, productId)
    .then(re => {
      return res.send({
        message: "product updated successfully"
      });
    })
    .catch(e => {
      console.log("mo this is the error " + e);
      res.status(404).send({
        ERROR: "there is error in updating product",
        error: e
      });
    });
});

module.exports = router;
