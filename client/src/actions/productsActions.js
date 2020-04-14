export function fetchProducts() {
  return function(dispatch) {
    fetch("http://localhost:3500/api/products")
      .then(response => {
        dispatch({
          type: "FETCH_PRODUCTS_FULFILLED",
          payload: response
        });
      })
      .catch(error => {
        dispatch({ type: "FETCH_PRODUCTS_REJECTED", payload: error });
      });
  };
}

// export function addProduct(id, text) {
//   return {
//     type: "ADD_PRODUCT",
//     payload: {
//       id,
//       text
//     }
//   };
// }
