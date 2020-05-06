export const addToCart = (products, product) => dispatch => {
  const cartProducts = products;
  // console.log("moha>>>> " + typeof products);

  let productAlreadyInCart = false;

  cartProducts.forEach(cp => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartProducts.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  dispatch({ type: "ADD_TO_CART", payload: { cartProducts } });
};

export const removeFromCart = (products, product) => dispatch => {
  const cartProducts = products.slice().filter(a => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartProducts));
  dispatch({ type: "REMOVE_FROM_CART", payload: { cartProducts } });
};
