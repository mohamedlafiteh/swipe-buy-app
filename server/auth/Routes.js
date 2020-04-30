const router = require("express").Router();
const jwt = require("jsonwebtoken");
const db = require("../services/database/users");
const {
  emailValidate,
  firstNameValidate,
  passwordValidate,
  lastNameValidate,
  countryValidate,
  phoneValidate
} = require("./validator.js");

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password, country } = req.body;

  const phone = Number(req.body.phone);
  const user = {
    firstName,
    lastName,
    email,
    password,
    country,
    phone
  };

  const errorMessages = [];

  if (!emailValidate(email)) {
    errorMessages.push("The email format is incorrect");
  }

  if (!firstNameValidate(firstName)) {
    errorMessages.push("First name is required and cannot be a number");
  }

  if (!lastNameValidate(lastName)) {
    errorMessages.push("Last name is required and cannot be a number");
  }

  if (!countryValidate(country)) {
    errorMessages.push("Country is required and cannot be a number");
  }

  if (!passwordValidate(password)) {
    errorMessages.push("The password must have at least 8 characters");
  }

  if (!phoneValidate(phone)) {
    errorMessages.push(
      "The phone number is shorter than 6 and it must be a number"
    );
  }

  if (errorMessages.length != 0) {
    return res.status(400).send({
      success: false,
      message: errorMessages.join(", ")
    });
  }

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
