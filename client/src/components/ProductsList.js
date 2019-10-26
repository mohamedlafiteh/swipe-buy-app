import React, { Component } from "react";
import Item from "./Item";
import { storeProducts, detailProduct } from "../data";
import { ProductConsumer } from "../ContextProductProvider";
import SearchInput from "./SearchInput";
import { Grid } from "semantic-ui-react";
//#e07b53
export class ProductsList extends Component {
  render() {
    return (
      <>
        <SearchInput />

        <Grid columns={4} divided>
          <Grid.Row>
            <ProductConsumer>
              {value => {
                return value.storeProducts.map(product => (
                  <Item
                    key={product.id}
                    product={product}
                    handleDetail={value.handleDetail}
                    addToCart={value.addToCart}
                  />
                ));
              }}
            </ProductConsumer>
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

export default ProductsList;
