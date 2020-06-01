export function fetchProducts() {
  return function (dispatch) {
    fetch("http://localhost:3500/api/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_PRODUCTS_FULFILLED",
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_PRODUCTS_REJECTED", payload: error });
      });
  };
}

export const filterProducts = (category) => (dispatch) => {
  dispatch({
    type: "FILTER_PRODUCTS_BY_CATEGORIES",
    payload: {
      category: category,
    },
  });
};

export const sortProductsByPrice = (priceSort) => (dispatch) => {
  dispatch({
    type: "ORDER_PRODUCTS_BY_PRICE",
    payload: {
      priceSort: priceSort,
    },
  });
};

export function fetchProductsById(id) {
  return function (dispatch) {
    fetch(`http://localhost:3500/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "FETCH_PRODUCT_BY_ID",
          payload: data[0],
        });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_PRODUCT_BY_ID_REJECTED", payload: error });
      });
  };
}

export const searchFilter = (products, inputValue) => (dispatch) => {
  var inputText = inputValue.toUpperCase();
  var titleName, company, description, category;
  var newArr = [];

  for (var i = 0; i < products.length; i++) {
    titleName = products[i].title;
    company = products[i].company;
    description = products[i].description;
    category = products[i].category;

    if (
      titleName.toUpperCase().indexOf(inputText) > -1 ||
      company.toUpperCase().indexOf(inputText) > -1 ||
      description.toUpperCase().indexOf(inputText) > -1 ||
      category.toUpperCase().indexOf(inputText) > -1
    ) {
      newArr.push(products[i]);
    }
  }

  dispatch({
    type: "FILTER_PRODUCTS_BY_INPUT_TEXT",
    payload: {
      inputValue: inputValue,
      products: newArr,
    },
  });
};

export function addProduct(id, text) {
  return {
    type: "ADD_PRODUCT",
    payload: {
      id,
      text,
    },
  };
}
