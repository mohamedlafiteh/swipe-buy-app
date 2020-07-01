export const filterByCategory = (product, selectedCategory) =>
  selectedCategory === "" || selectedCategory === product.category;

//issue when i sort the category first the price sort doesn't work
