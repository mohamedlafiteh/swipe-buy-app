import React, { Component } from "react";
import { Grid, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/usersActions";
import { fetchProducts } from ".././actions/productsActions";
import HomePageProducts from "./HomePageProducts";
import MainSlider from "./carousel/MainSlider";

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { user, products } = this.props;

    return (
      <>
        <MainSlider />
        <Grid columns={4}>
          <Grid.Row>
            {products.map(product => (
              <HomePageProducts key={product.id} product={product} />
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

export default connect(mapStateToProps)(Home);
