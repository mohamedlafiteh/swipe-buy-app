import React, { Component } from "react";
import Item from "./Item";
import { storeProducts, detailProduct } from "../data";
import { ProductConsumer } from "../ContextProductProvider";
import SearchInput from "./SearchInput";
import { Grid } from "semantic-ui-react";

export class ItemsList extends Component {
  render() {
    return (
      <>
        <SearchInput />

        <Grid columns={4} divided>
          <Grid.Row>
            <ProductConsumer>
              {value => {
                return value.storeProducts.map(products => {
                  return (
                    <Item
                      key={products.id}
                      products={products}
                      handleDetail={value.handleDetail}
                      addToCart={value.addToCart}
                    />
                  );
                });
              }}
            </ProductConsumer>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default ItemsList;
