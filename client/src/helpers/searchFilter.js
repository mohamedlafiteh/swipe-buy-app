export const searchFilter = (product, inputValue) => {
  var inputText = inputValue.toUpperCase();
  var titleName = product.title;

  return titleName.toUpperCase().indexOf(inputText) > -1;
};
