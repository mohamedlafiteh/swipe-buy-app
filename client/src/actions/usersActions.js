export default function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "will",
      age: 35
    }
  };
}

export default function setUserName(name) {
  return {
    type: "SET_USER_NAME",
    payload: name
  };
}
export default function setUserAge(age) {
  return {
    type: "SET_USER_AGE",
    payload: age
  };
}