export const addToCart = (products, product) => (dispatch) => {
  const cartProducts = products;

  let productAlreadyInCart = false;

  cartProducts.forEach((cp) => {
    if (cp.id === product.id) {
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartProducts.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  dispatch({ type: "ADD_TO_CART", payload: { cartProducts } });
};

export const AddMoreSameItemInCart = (products, product) => (dispatch) => {
  const cartProducts = products;

  let productAlreadyInCart = false;

  cartProducts.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });
  localStorage.setItem("cartItems", JSON.stringify(cartProducts));

  dispatch({ type: "ADD_MORE_TO_CART_ITEMS", payload: { cartProducts } });
};

export const reduceSomeOfItemsInCart = (products, product) => (dispatch) => {
  const cartProducts = products;

  let productAlreadyInCart = false;

  cartProducts.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count -= 1;

      productAlreadyInCart = true;
    }
  });
  localStorage.setItem("cartItems", JSON.stringify(cartProducts));

  dispatch({ type: "REMOVE_SOME_CART_ITEMS", payload: { cartProducts } });
};

export const removeFromCart = (products, product) => (dispatch) => {
  const cartProducts = products.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  dispatch({ type: "REMOVE_FROM_CART", payload: { cartProducts } });
};

// export const cancelItemFromCart = (products, product) => (dispatch) => {
//   const cartProducts = products.slice().filter((a) => a.id !== product.id);
//   localStorage.setItem("cartItems", JSON.stringify(cartProducts));
//   dispatch({ type: "REMOVE_FROM_CART", payload: { cartProducts } });
// };
