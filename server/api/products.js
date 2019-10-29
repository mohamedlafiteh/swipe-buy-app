const router = require("express").Router();
const passport = require("passport");
const prodsDB = require("../services/database/products");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { id, title, price, description } = req.body;
    const product = { title, price, description };

    console.log(product);

    prodsDB
      .createProduct(product)
      .then(() => {
        return res.send("created");
      })
      .catch(e => {
        return res.status(400).send(" alert there is error insert product");
      });
  }
);

module.exports = router;
