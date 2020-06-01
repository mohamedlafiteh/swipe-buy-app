import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from ".././actions/productsActions";
import HomePageProduct from "./HomePageProduct";
import MainSlider from "./carousel/MainSlider";
import ".././styles/home.css";
import {
  filterByCategory,
  sortByPrice,
  searchFilter,
} from "../helpers/filterByCategory";

class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { user, products } = this.props;
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

const mapStateToProps = (store) => {
  return {
    products: store.products.products
      .filter((product) => filterByCategory(product, store.products.category))
      .sort((product) => sortByPrice(product, store.products.priceSort))
      .filter((product) => searchFilter(product, store.products.inputValue)),
  };
};

export default connect(mapStateToProps)(Home);
