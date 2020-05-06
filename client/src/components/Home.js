import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from ".././actions/productsActions";
import HomePageProducts from "./HomePageProducts";
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
              return <HomePageProducts key={index} product={product} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    products: store.products.products
  };
};

export default connect(mapStateToProps)(Home);
