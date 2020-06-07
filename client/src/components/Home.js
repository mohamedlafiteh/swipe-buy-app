import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from ".././actions/productsActions";
import HomePageProduct from "./HomePageProduct";
import MainSlider from "./carousel/MainSlider";
import ".././styles/home.css";
import { filterByCategory } from "../helpers/filterByCategory";
import { priceSort } from "../helpers/priceSort";
import { searchFilter } from "../helpers/searchFilter";

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { user, products, name } = this.props; // Theo
    //console.log("products in the home +" + products);

    return (
      <>
        <MainSlider />

        <div className='container'>
          <div className='row'>
            {products.map((product, index) => {
              return <HomePageProduct key={index} product={product} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export const mapStateToProps = (store) => {
  // const filteredProducts = store.products.products
  //   .filter((product) => filterByCategory(product, store.products.category))
  //   .filter((product) => searchFilter(product, store.products.inputValue));
  return {
    // products: sortByPrice(filteredProducts, store.products.priceSort),
    products: store.products.products
      .filter((product) => filterByCategory(product, store.products.category))
      .sort((a, b) => priceSort(a, b, store.products.priceSort))
      .filter((product, a, b) =>
        searchFilter(product, store.products.inputValue)
      ),
  };
};

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

export default connect(mapStateToProps)(Home);
