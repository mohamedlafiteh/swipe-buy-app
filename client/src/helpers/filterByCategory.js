export const filterByCategory = (product, selectedCategory) =>
  selectedCategory === "" || selectedCategory === product.category;

export const sortByPrice = (products, priceSort) => {
  if (priceSort) {
    return products.sort((a, b) =>
      priceSort === "lowestPrice"
        ? Number(a.price) > Number(b.price)
          ? 1
          : -1
        : Number(a.price) < Number(b.price)
        ? 1
        : -1
    );
  }

  return products.sort((a, b) => (a.id > b.id ? 1 : -1));
};

//issue when i sort the category first the price sort doesn't work

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
