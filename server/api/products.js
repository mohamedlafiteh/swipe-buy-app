// const router = require("express").Router();
// const passport = require("passport");
const prodsDB = require("../services/database/products");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // res.status(200).send(`products`);

  prodsDB
    .listProducts()
    .then(r => {
      return res.send(r);
    })
    .catch(e => {
      // console.log("e: ", e);
      res.status(400).send({
        e: e
      });
      return res.status(400).send(" alert there is error insert product");
    });
});

// router.post(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {
//     const { id, title, price, description } = req.body;
//     const product = { id, title, price, description };

//     console.log(product);

//     prodsDB
//       .createProduct(product)
//       .then(() => {
//         return res.send("created");
//       })
//       .catch(e => {
//         return res.status(400).send(" alert there is error insert product");
//       });
//   }
// );

module.exports = router;
