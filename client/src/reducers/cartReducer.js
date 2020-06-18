const iniState = {
  products: [],
};

export default function (state = iniState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, products: action.payload.cartProducts };
    case "REMOVE_FROM_CART":
      return { ...state, products: action.payload.cartProducts };

    default:
      return state;
  }
}
