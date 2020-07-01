import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ".././styles/HomePageProducts.css";
import currencyFormat from "../helpers/currencyFormat";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { connect } from "react-redux";

export class HomePageProduct extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, title, image, price, company } = this.props.product;
    const { added } = this.props;
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
            {added ? (
              <div>
                <button className='products_buttons btn btn-success'>
                  Added
                </button>
                <button
                  onClick={(e) =>
                    this.props.removeFromCart(
                      this.props.cartProducts,
                      this.props.product
                    )
                  }
                  className='products_buttons btn btn-danger'
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={(e) =>
                  this.props.addToCart(
                    this.props.cartProducts,
                    this.props.product
                  )
                }
                className='products_buttons'
              >
                Add to Cart
              </button>
            )}
          </a>
        </div>
      </div>
    );
  }
}

HomePageProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCard: PropTypes.bool,
  }).isRequired,
};

HomePageProduct.defaultProps = {
  cartProducts: {},
};

const mapStateToProps = (state, ownProps) => {
  if (state.cart.products.length == 0) {
    return {
      cartProducts: state.cart.products,
    };
  } else {
    return {
      cartProducts: state.cart.products,
      added: state.cart.products
        .map((item) => {
          return item.id;
        })
        .includes(ownProps.product.id),
    };
  }
};
export default connect(mapStateToProps, { addToCart, removeFromCart })(
  HomePageProduct
);
