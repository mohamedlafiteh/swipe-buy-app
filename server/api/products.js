// const passport = require("passport");
const prodsDB = require("../services/database/products");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  prodsDB
    .listProducts()
    .then(products => {
      console.log(typeof products[0].id);
      return res.send(products);
    })
    .catch(e => {
      res.status(400).send({
        e: e
      });
      return res.status(400).send("There is error in getting products");
    });
});

router.get("/:productId", (req, res) => {
  const productId = req.params.productId;

  prodsDB
    .getProductById(productId)
    .then(re => {
      return res.send(re);
    })
    .catch(e => {
      res.status(404).send({
        ERROR: "There is error in getting product by id",
        error: e
      });
    });
});

router.post("/", (req, res) => {
  const { image, title, price, description, company, incart } = req.body;
  console.log(typeof title, typeof price, typeof description);
  prodsDB
    .createProduct(image, title, price, description, company, incart)
    .then(response => {
      return res.send({
        message: "created successfully"
      });
    })
    .catch(e => {
      res.status(400).send({
        message: "ERROR in inserting data",
        error: e
      });
    });
});

router.delete("/:productId", (req, res) => {
  const productId = req.params.productId;
  prodsDB
    .deleteProduct(productId)
    .then(re => {
      return res.send({
        message: "product deleted successfully"
      });
    })
    .catch(e => {
      res.status(404).send({
        ERROR: "There is error in deleting product",
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
        message: "Product updated successfully"
      });
    })
    .catch(e => {
      res.status(404).send({
        ERROR: "There is error in updating product",
        error: e
      });
    });
});

module.exports = router;
