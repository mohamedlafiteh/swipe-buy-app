import { mapStateToProps } from ".././components/Home";

describe("Home", () => {
  describe("mapStateToProps", () => {
    it("should return the whole products from redux store ", () => {
      const fakeStoreData = {
        cart: {},
        user: {
          user: {
            id: null,
            name: "mo",
            age: null,
          },
          fetching: false,
          fetched: false,
          error: null,
        },
        products: {
          category: "",
          inputValue: "",
          priceSort: "",
          isFetching: false,
          error: null,
          fetching: false,
          fetched: false,
          user: {},
          products: [
            {
              id: "1",
              image: "img/product-1.png",
              title: "apple",
              company: "United fruit company",
              category: "phones",
              price: 20,
              incart: false,
              description: "some text",
            },
            {
              id: "2",
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
        cart: {},
        user: {
          user: {
            id: null,
            name: "mo",
            age: null,
          },
          fetching: false,
          fetched: false,
          error: null,
        },
        products: {
          category: "",
          inputValue: "",
          priceSort: "",
          isFetching: false,
          error: null,
          fetching: false,
          fetched: false,
          user: {},
          products: [
            {
              id: "1",
              image: "img/product-1.png",
              title: "apple",
              company: "United fruit company",
              category: "phones",
              price: 20,
              incart: false,
              description: "some text",
            },
            {
              id: "2",
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
