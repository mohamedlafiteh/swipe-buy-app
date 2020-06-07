import { mapStateToProps } from ".././components/Home";

describe("Home", () => {
  describe("mapStateToProps", () => {
    it("should return the whole products from redux store ", () => {
      const fakeStoreData = {
        products: {
          category: "phones",
          inputValue: "iphone",
          priceSort: "lowestPrice",
          products: [
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
          ],
        },
      };

      const result = mapStateToProps(fakeStoreData);
      expect(result).toEqual({
        products: {
          category: "phones",
          inputValue: "iphone",
          priceSort: "lowestPrice",
          products: [
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
          ],
        },
      });
    });
  });
});
