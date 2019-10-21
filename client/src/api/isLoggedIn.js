export default isLoggedIn = () => {
  if (sessionStorage.getItem("token")) {
    return true;
  } else {
    return false;
  }
};
