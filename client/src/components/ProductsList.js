import React, { Component } from "react";
import Product from "./Product";
import SearchInput from "./SearchInput";
import { Grid, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/usersActions";
import { fetchProducts } from ".././actions/productsActions";

class ProductsList extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchProducts());
  }
  // fetchProducts = () => {
  // };
  render() {
    const { user, products } = this.props;
    // if (!products.length) {
    //   return <button onClick={this.fetchProducts}>Load Products</button>;
    // }

    return (
      <>
        <SearchInput />
        <Grid columns={4}>
          <Grid.Row>
            {products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </Grid.Row>
        </Grid>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    user: store.user.user,
    products: store.products.products
  };
};

export default connect(mapStateToProps)(ProductsList);
