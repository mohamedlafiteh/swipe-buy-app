import React, { Component } from "react";
import Product from "./Product";
import { storeProducts, detailProduct } from "../data";
import { ProductConsumer } from "../ContextProductProvider";
import SearchInput from "./SearchInput";
import { Grid, Card } from "semantic-ui-react";
//#e07b53
export class ProductsList extends Component {
  render() {
    return (
      <>
        <SearchInput />

        <Grid columns={4}>
          <Grid.Row>
            <ProductConsumer>
              {value => {
                return value.storeProducts.map(product => (
                  <Product
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
