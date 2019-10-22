import React, { Component } from "react";
import Item from "./Item";
import { storeProducts, detailProduct } from "../data";
import { ProductConsumer } from "../ContextProductProvider";

export class ItemsList extends Component {
  render() {
    return (
      <>
        <h1>The Items List</h1>
        <ProductConsumer>
          {value => {
            return value.storeProducts.map(products => {
              return (
                <Item
                  key={products.id}
                  products={products}
                  handleDetail={value.handleDetail}
                />
              );
            });
          }}
        </ProductConsumer>
      </>
    );
  }
}

export default ItemsList;
