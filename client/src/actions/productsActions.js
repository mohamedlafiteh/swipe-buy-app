export function fetchProducts() {
  return function(dispatch) {
    fetch("http://localhost:3500/api/products")
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "FETCH_PRODUCTS_FULFILLED",
          payload: data
        });
      })
      .catch(error => {
        dispatch({ type: "FETCH_PRODUCTS_REJECTED", payload: error });
      });
  };
}

export function fetchProductsById(id) {
  return function(dispatch) {
    fetch(`http://localhost:3500/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("mo this is data from fetch-by-id" + data);
        dispatch({
          type: "FETCH_PRODUCT_BY_ID",
          payload: data
        });
      })
      .catch(error => {
        dispatch({ type: "FETCH_PRODUCT_BY_ID_REJECTED", payload: error });
      });
  };
}

export function addProduct(id, text) {
  return {
    type: "ADD_PRODUCT",
    payload: {
      id,
      text
    }
  };
}
