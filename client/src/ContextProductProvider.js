import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ContextProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeProducts: [],
      detailProduct: detailProduct
    };
  }
  componentDidMount() {
    this.SetStoreProducts();
  }
  SetStoreProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { storeProducts: tempProducts };
    });
  };

  getItem = id => {
    const product = this.state.storeProducts.find(item => {
      return item.id === id;
    });
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCard = id => {
    console.log(`hello from addtocard ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handelDetail: this.handleDetail,
          addToCard: this.addToCard
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ContextProductProvider, ProductConsumer };
