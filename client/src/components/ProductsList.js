import React, { Component } from "react";
import Product from "./Product";
import SearchInput from "./SearchInput";
import { Grid, Card } from "semantic-ui-react";
import { connect } from "react-redux";

export class ProductsList extends Component {
  render() {
    console.log(`this is the lis Mo ${this.props.user}`);
    return (
      <>
        <SearchInput />

        <Grid columns={4}>
          <Grid.Row>
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
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user.user
  };
};

export default connect(mapStateToProps)(ProductsList);
