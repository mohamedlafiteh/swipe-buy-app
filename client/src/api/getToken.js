export const getToken = (email, password) => {
  const postParams = {
    body: JSON.stringify({ email, password }),
    method: "POST",
    headers: {
      "content-type": "application/json"
    }
  };
  return fetch("http://localhost:3500/auth/login", postParams).then(res => {
    if (res.status >= 200 && res.status < 300) {
      return res.json();
    } else {
      throw res;
    }
  });
};
