const iniState = {
  products: [],
  category: "",
  priceSort: "",
  inputValue: "",
  isFetching: false,
  error: null,
};
export default function reducer(state = iniState, action) {
  switch (action.type) {
    case "FETCH_PRODUCTS": {
      return { ...state, isFetching: true };
    }
    case "FETCH_PRODUCTS_REJECTED": {
      return { ...state, isFetching: false, error: action.payload };
    }
    case "FETCH_PRODUCTS_FULFILLED": {
      return {
        ...state,
        isFetching: false,
        products: action.payload,
      };
    }

    case "FILTER_PRODUCTS_BY_CATEGORIES":
      return {
        ...state,

        category: action.payload.category,
      };

    case "FILTER_PRODUCTS_BY_INPUT_TEXT":
      return {
        ...state,
        inputValue: action.payload.inputValue,
      };

    case "ORDER_PRODUCTS_BY_PRICE":
      return {
        ...state,

        priceSort: action.payload.priceSort,
      };
    case "ADD_PRODUCT": {
      return [...state.products, action.payload];
    }

    case "UPDATE_PRODUCT": {
      const { id, text } = action.payload;
      const newText = [...state.products];
      const textToUpdate = newText.findIndex((product) => product.id === id);
      newText[textToUpdate] = action.payload;

      return { ...state, products: newText };
    }
    case "DELETE_PRODUCT": {
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    }
    case "FETCH_PRODUCT_BY_ID": {
      return {
        ...state,
        isFetching: false,
        selectedProduct: action.payload,
      };
    }
  }
  return state;
}
