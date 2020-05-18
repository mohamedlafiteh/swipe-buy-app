import { filterByCategory, sortByPrice } from "./filterByCategory";

describe("Home", () => {
  describe("filterByCategory", () => {
    it("should return false when the product's category does not match the selected category", () => {
      const dummyProduct = {
        id: "something",
        title: "Some title",
        company: "Nike",
        category: "fruits"
      };
      const result = filterByCategory(dummyProduct, "shoes");

      expect(result).toEqual(false);
    });

    it("should return true when the selected category is empty", () => {
      const result = filterByCategory({}, "");
      expect(result).toEqual(true);
    });

    it("should return true when the products category is the same with the selected category", () => {
      const apple = {
        id: "apple-id",
        title: "apple",
        company: "United fruit company",
        category: "fruits"
      };
      const result = filterByCategory(apple, "fruits");
      expect(result).toEqual(true);
    });

    it("should return false when the products category is the different than the selected category", () => {
      const apple = {
        id: "apple-id",
        title: "apple",
        company: "United fruit company",
        category: "fruits"
      };
      const result = filterByCategory(apple, "vegetables");
      expect(result).toEqual(false);
    });
  });

  describe("sortByPrice", () => {});
});
