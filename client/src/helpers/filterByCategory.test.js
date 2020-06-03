import { filterByCategory, sortByPrice } from "./filterByCategory";

describe("Home", () => {
  describe("filterByCategory", () => {
    it("should return false when the product's category does not match the selected category", () => {
      const dummyProduct = {
        id: "something",
        title: "Some title",
        company: "Nike",
        category: "fruits",
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
        category: "fruits",
      };
      const result = filterByCategory(apple, "fruits");
      expect(result).toEqual(true);
    });

    it("should return false when the products category is the different than the selected category", () => {
      const apple = {
        id: "apple-id",
        title: "apple",
        company: "United fruit company",
        category: "fruits",
      };
      const result = filterByCategory(apple, "vegetables");
      expect(result).toEqual(false);
    });
  });

  describe("sortByPrice", () => {
    it("should return the products sorted from low to high price when the selected sort is lowestPrice ", () => {
      const products = [
        {
          id: "1",
          title: "apple",
          company: "United fruit company",
          category: "phones",
          price: 10,
        },
        {
          id: "2",
          title: "apple",
          company: "United fruit company",
          category: "phones",
          price: 20,
        },
      ];
      const result = sortByPrice(products, "lowestPrice");
      expect(result).toEqual([
        {
          id: "1",
          title: "apple",
          company: "United fruit company",
          category: "phones",
          price: 10,
        },
        {
          id: "2",
          title: "apple",
          company: "United fruit company",
          category: "phones",
          price: 20,
        },
      ]);
    });

    it("should return the products sorted from high to low price when the selected sort is highestPrice ", () => {
      const products = [
        {
          id: "1",
          title: "apple",
          company: "United fruit company",
          category: "phones",
          price: 10,
        },
        {
          id: "2",
          title: "apple",
          company: "United fruit company",
          category: "phones",
          price: 20,
        },
      ];
      const result = sortByPrice(products, "highestPrice");
      expect(result).toEqual([
        {
          id: "2",
          title: "apple",
          company: "United fruit company",
          category: "phones",
          price: 20,
        },
        {
          id: "1",
          title: "apple",
          company: "United fruit company",
          category: "phones",
          price: 10,
        },
      ]);
    });
  });
});
