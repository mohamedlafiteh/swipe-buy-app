import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

class ContextProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeProducts: storeProducts,
      detailProduct: detailProduct
    };
  }
  handelDetail = () => {
    console.log("hello from detail");
  };
  addToCard = () => {
    console.log("hello from add to card");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handelDetail: this.handelDetail,
          addToCard: this.addToCard
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export { ContextProductProvider, ProductConsumer };
