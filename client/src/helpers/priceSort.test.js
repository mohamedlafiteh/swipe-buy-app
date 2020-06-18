import { priceSort } from "./priceSort";

describe("Home", () => {
  describe("priceSort", () => {
    it("should return -1 when the selected sort is lowestPrice ", () => {
      const a = {
        id: "1",
        title: "apple",
        company: "United fruit company",
        category: "phones",
        price: 10,
      };

      const b = {
        id: "2",
        title: "apple",
        company: "United fruit company",
        category: "phones",
        price: 20,
      };

      const result = priceSort(a, b, "lowestPrice");

      expect(result).toEqual(-1);
    });

    it("should return -1 when the selected sort is highestPrice ", () => {
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
      const result = priceSort(products, "highestPrice");
      expect(result).toEqual(-1);
    });
  });
});
