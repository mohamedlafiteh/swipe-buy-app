function emailValidate(email) {
  var expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (expression.test(email.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

function firstNameValidate(name) {
  if (name == null || name.length == 0 || typeof name == "number") {
    return false;
  } else {
    return true;
  }
}

function lastNameValidate(name) {
  if (name == null || name.length == 0 || typeof name == "number") {
    return false;
  } else {
    return true;
  }
}

function countryValidate(country) {
  const checkFormat = isNaN(country);
  if (country == null || country.length == 0 || !checkFormat) {
    return false;
  } else {
    return true;
  }
}

function passwordValidate(password) {
  return password.length >= 8;
}

function phoneValidate(phone) {
  if (phone === null || phone.length === 0 || typeof phone === "string") {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  emailValidate: emailValidate,
  firstNameValidate: firstNameValidate,
  passwordValidate: passwordValidate,
  lastNameValidate: lastNameValidate,
  countryValidate: countryValidate,
  phoneValidate: phoneValidate
};
