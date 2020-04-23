import React, { Component } from "react";
import Product from "./Product";

class ProductsList extends React.Component {
  render() {
    const { user, products } = this.props;

    return (
      <>
        <h1>HI from products</h1>
      </>
    );
  }
}

export default ProductsList;
