import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProductsById } from ".././actions/productsActions";
import { addToCart } from ".././actions/cartActions";

import "../styles/details.css";
import currencyFormat from "../helpers/currencyFormat";

export class Details extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.dispatch(fetchProductsById(id));
  }
  render() {
    const { product, isLoading } = this.props;
    return isLoading ? (
      "Loading....."
    ) : (
      <div>
        <div className='product-view-container'>
          <div className='content-container'>
            <div className='left-container'>
              <Link to='/'>
                <div className='triangle-topleft'>
                  <div className='back-arrow' id='buy-toaster'></div>
                </div>
              </Link>
              <div className='product-image--container'>
                <img
                  className='product-image--featured'
                  id='featured'
                  src={`${window.location.origin}/${product.image}`}
                  alt='toaster'
                />
                <ul className='product-image--list'>
                  <li className='item-selected'>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      className='product-image--item'
                    />
                  </li>
                  <li>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      className='product-image--item'
                    />
                  </li>
                  <li>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      className='product-image--item'
                    />
                  </li>
                  <li>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      className='product-image--item'
                    />
                  </li>
                  <li>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      className='product-image--item'
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div className='right-container'>
              <div>
                <h1 className='title'>{product.title}</h1>
                <h2 className='subtitle subtitle-container'>
                  {product.company}
                </h2>
                <div>
                  <span className='rating'>
                    <input
                      type='radio'
                      className='rating-input'
                      id='rating-input-1-5'
                      name='rating-input-1'
                    />
                    <label
                      for='rating-input-1-5'
                      className='rating-star'
                    ></label>
                    <input
                      type='radio'
                      className='rating-input'
                      id='rating-input-1-4'
                      name='rating-input-1'
                    />
                    <label
                      for='rating-input-1-4'
                      className='rating-star'
                    ></label>
                    <input
                      type='radio'
                      className='rating-input'
                      id='rating-input-1-3'
                      name='rating-input-1'
                    />
                    <label
                      for='rating-input-1-3'
                      className='rating-star'
                    ></label>
                    <input
                      type='radio'
                      className='rating-input'
                      id='rating-input-1-2'
                      name='rating-input-1'
                    />
                    <label
                      for='rating-input-1-2'
                      className='rating-star'
                    ></label>
                    <input
                      type='radio'
                      className='rating-input'
                      id='rating-input-1-1'
                      name='rating-input-1'
                    />
                    <label
                      for='rating-input-1-1'
                      className='rating-star'
                    ></label>
                  </span>
                  <span>
                    <a href='#' className='reviews'>
                      232 customer reviews
                    </a>
                  </span>
                </div>
              </div>
              <span>
                <p>
                  Price:
                  <span className='emphasize'>
                    {currencyFormat.currencyFormat(product.price)}
                  </span>
                </p>
                <label for='quantity'>Quantity:</label>
                <select name='quantity' className='select-dropdown'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                </select>
              </span>
              <div>
                <h2 className='title'>Product Description</h2>
                <div className='subtitle-container'>
                  <span>Size: 1-Pack</span>
                  <span>|</span>
                  <span>Color: Black</span>
                </div>
                <p classNameName='description'>{product.description}</p>
              </div>
              <div>
                <button className='my-btn flex-btn'>
                  <span>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      className='cart-icon'
                    />
                  </span>
                  <span
                    onClick={(e) =>
                      this.props.addToCart(this.props.cartProducts, product)
                    }
                  >
                    Add to Cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
  }),
};

Details.defaultProps = {
  product: {},
};

const mapStateToProps = (store) => {
  return {
    product: store.products.selectedProduct,
    isLoading: store.products.isFetching,
    cartProducts: store.cart.products,
  };
};

export default connect(mapStateToProps)(Details);
