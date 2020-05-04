import React, { Component } from "react";
import { Button, Card, Image, Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ".././styles/HomePageProducts.css";
import currencyFormat from "../helpers/currencyFormat";

export class HomePageProducts extends Component {
  render() {
    const {
      id,
      title,
      image,
      price,
      inCart,
      company,
      description
    } = this.props.product;
    return (
      <div className='col-md-4 all-cards'>
        <div className='products__box'>
          <Link to={`/products/${id}`}>
            <img className='img-card' src={image} />
          </Link>
          <div className='product__text'>
            <h5 className='products__title'>
              {title.length < 20 ? `${title}` : `${title.substring(0, 25)}...`}
            </h5>
            <p className='products__subtitle'>
              Company: <span>{company}</span>
            </p>
            <h1 className='products__subtitle'>
              Price:<span>{currencyFormat.currencyFormat(price)}</span>{" "}
            </h1>
          </div>
          <Link to={`/products/${id}`}>
            <button className='products_buttons'>View Product</button>
          </Link>
        </div>
      </div>
    );
  }
}

HomePageProducts.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCard: PropTypes.bool
  }).isRequired
};

export default HomePageProducts;
