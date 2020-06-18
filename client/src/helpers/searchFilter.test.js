import { searchFilter } from "./searchFilter";

describe("Home", () => {
  describe("searchFilter", () => {
    it("should return the true if the the product title is equal to the input value ", () => {
      const a = {
        id: "1",
        title: "apple",
        company: "United fruit company",
        category: "phones",
        price: 10,
      };

      const result = searchFilter(a, "apple");

      expect(result).toEqual(true);
    });
  });
});
