export const searchFilter = (products, inputValue) => {
  let all = [products];

  var inputText = inputValue.toUpperCase();
  var titleName, company, description, category;
  var newArr = [];

  for (var i = 0; i < all.length; i++) {
    titleName = all[i].title;
    company = all[i].company;
    description = all[i].description;
    category = all[i].category;

    if (
      titleName.toUpperCase().indexOf(inputText) > -1 ||
      company.toUpperCase().indexOf(inputText) > -1 ||
      description.toUpperCase().indexOf(inputText) > -1 ||
      category.toUpperCase().indexOf(inputText) > -1
    ) {
      newArr.push(products[i]);
    }
  }

  return newArr;
};
