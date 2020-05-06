import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ".././styles/HomePageProducts.css";
import currencyFormat from "../helpers/currencyFormat";
import { addToCart } from ".././actions/cartActions";
import { connect } from "react-redux";

export class HomePageProducts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, title, image, price, company } = this.props.product;
    console.log(typeof this.props.products);
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
          <a href={`#/products/${id}`}>
            <button
              onClick={e =>
                this.props.addToCart(
                  this.props.cartProducts,
                  this.props.product
                )
              }
              className='products_buttons'
            >
              Add to cart
            </button>
          </a>
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

HomePageProducts.defaultProps = {
  productS: {},
  cartProducts: {}
};

const mapStateToProps = state => ({
  products: state.products.filteredProducts,
  cartProducts: state.cart.products
});

export default connect(mapStateToProps, { addToCart })(HomePageProducts);
