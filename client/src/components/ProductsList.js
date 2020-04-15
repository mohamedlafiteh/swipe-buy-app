import React, { Component } from "react";
import Product from "./Product";
import SearchInput from "./SearchInput";
import { Grid, Card } from "semantic-ui-react";
import { connect } from "react-redux";

const ProductsList = props => (
  <>
    <div>Name: {props.user.name}</div>
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

const mapStateToProps = store => {
  return {
    user: store.user.user
  };
};

export default connect(mapStateToProps)(ProductsList);
