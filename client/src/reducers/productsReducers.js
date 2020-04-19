export default function reducer(
  state = {
    products: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      return { ...state, fetching: true };
    }
    case "FETCH_PRODUCTS_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "FETCH_PRODUCTS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        products: action.payload
      };
    }
    case "ADD_PRODUCT": {
      return [...state.products, action.payload];
    }
    case "UPDATE_PRODUCT": {
      const { id, text } = action.payload;
      const newText = [...state.products];
      const textToUpdate = newText.findIndex(product => product.id === id);
      newText[textToUpdate] = action.payload;

      return { ...state, products: newText };
    }
    case "DELETE_PRODUCT": {
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload
        )
      };
    }
    case "FETCH_PRODUCT_BY_ID": {
      return {
        ...state,
        products: state.products.find(product => {
          console.log("mo this is the products " + product);
          return product.id === action.payload.id;
        })
      };
    }
  }
  return state;
}
