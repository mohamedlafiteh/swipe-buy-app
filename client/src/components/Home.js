import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from ".././actions/productsActions";
import HomePageProduct from "./HomePageProduct";
import MainSlider from "./carousel/MainSlider";
import ".././styles/home.css";

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

const mapStateToProps = store => {
  return {
    products: store.products.products.filter(product => {
      var selectedCategory = store.products.category;
      var selectedPrice = store.products.priceSort;

      if (selectedCategory === "") {
        return true;
      }
      if (selectedCategory === product.category) {
        return true;
      }

      if (selectedPrice === "") {
        return true;
      }
      // if (selectedPrice === product.priceSort) {
      //   return true;
      // }
    })
  };
};

export default connect(mapStateToProps)(Home);
