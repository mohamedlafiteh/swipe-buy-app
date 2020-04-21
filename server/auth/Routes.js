const router = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../services/database/users");

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, country, phone } = req.body;

  const user = {
    firstName,
    lastName,
    email,
    password,
    country,
    phone
  };
  db.createUser(user)
    .then(() => {
      res.send({
        success: true,
        message: "Account created"
      });
    })
    .catch(err => {
      res.status(400).send({
        success: false,
        message: err
      });
    });
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  console.log(`Login attempt ${email}`);
  try {
    const user = await db.getUserByEmail(email);

    if (!email || !password || !user || password !== user.password) {
      return res.sendStatus(403);
    }
    const id = user.id;

    const secret = process.env.JWT_SECRET || "your_jwt_secret";
    const token = jwt.sign({ userId: id }, secret);
    delete user.password;
    delete user.salt;
    return res.send({ token, user });
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
