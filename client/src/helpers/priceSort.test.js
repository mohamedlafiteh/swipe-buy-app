import { priceSort } from "./priceSort";

describe("Home", () => {
  describe("priceSort", () => {
    it("should return the products sorted from low to high price when the selected sort is lowestPrice ", () => {
      const a = [
        {
          id: "1",
          title: "apple",
          company: "United fruit company",
          category: "phones",
          price: 10,
        },
      ];
      const b = [
        {
          id: "2",
          title: "apple",
          company: "United fruit company",
          category: "phones",
          price: 20,
        },
      ];

      const result = priceSort(a, b, "lowestPrice");
      console.log("results mo" + result);
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
      const result = priceSort(products, "highestPrice");
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
