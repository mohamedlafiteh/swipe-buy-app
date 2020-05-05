import React, { Component } from "react";
import { Grid, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchUser } from "../actions/usersActions";
import { fetchProducts } from ".././actions/productsActions";
import HomePageProducts from "./HomePageProducts";
import FilteredProducts from "./FilteredProducts";
import MainSlider from "./carousel/MainSlider";
import ".././styles/home.css";

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchProducts());
  }

  render() {
    const { user, products } = this.props;

    return (
      <>
        <MainSlider />
        <div className='container'>
          <FilteredProducts />
          <div className='row'>
            {products.map((product, index) => {
              return <HomePageProducts key={index} product={product} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    products: store.products.products
  };
};

export default connect(mapStateToProps)(Home);

{
  /* <Grid columns={4}>
  <Grid.Row>
    {products.map(product => (
      <HomePageProducts key={product.id} product={product} />
    ))}
  </Grid.Row>
</Grid> */
}
