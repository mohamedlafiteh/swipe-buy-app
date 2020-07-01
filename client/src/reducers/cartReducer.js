const iniState = {
  products: [],
};

export default function (state = iniState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, products: action.payload.cartProducts };
    case "REMOVE_FROM_CART":
      return { ...state, products: action.payload.cartProducts };
    case "ADD_MORE_TO_CART_ITEMS":
      return { ...state, products: action.payload.cartProducts };
    case "REMOVE_SOME_CART_ITEMS":
      return {
        ...state,
        products: action.payload.cartProducts,
      };

    default:
      return state;
  }
}
