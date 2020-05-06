export default function(state = {}, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, products: action.payload.cartProducts };
    case "REMOVE_FROM_CART":
      return { ...state, products: action.payload.cartProducts };

    default:
      return state;
  }
}
