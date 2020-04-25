import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchProductsById } from ".././actions/productsActions";
import "../styles/details.css";

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
        <div class='product-view-container'>
          <div class='content-container'>
            <div class='left-container'>
              <div class='triangle-topleft'>
                <div class='back-arrow' id='buy-toaster'></div>
              </div>
              <div class='product-image--container'>
                <img
                  class='product-image--featured'
                  id='featured'
                  src={`${window.location.origin}/${product.image}`}
                  alt='toaster'
                />
                <ul class='product-image--list'>
                  <li class='item-selected'>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      class='product-image--item'
                    />
                  </li>
                  <li>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      class='product-image--item'
                    />
                  </li>
                  <li>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      class='product-image--item'
                    />
                  </li>
                  <li>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      class='product-image--item'
                    />
                  </li>
                  <li>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      class='product-image--item'
                    />
                  </li>
                </ul>
              </div>
            </div>
            <div class='right-container'>
              <div>
                <h1 class='title'>{product.title}</h1>
                <h2 class='subtitle subtitle-container'>{product.company}</h2>
                <div>
                  <span class='rating'>
                    <input
                      type='radio'
                      class='rating-input'
                      id='rating-input-1-5'
                      name='rating-input-1'
                    />
                    <label for='rating-input-1-5' class='rating-star'></label>
                    <input
                      type='radio'
                      class='rating-input'
                      id='rating-input-1-4'
                      name='rating-input-1'
                    />
                    <label for='rating-input-1-4' class='rating-star'></label>
                    <input
                      type='radio'
                      class='rating-input'
                      id='rating-input-1-3'
                      name='rating-input-1'
                    />
                    <label for='rating-input-1-3' class='rating-star'></label>
                    <input
                      type='radio'
                      class='rating-input'
                      id='rating-input-1-2'
                      name='rating-input-1'
                    />
                    <label for='rating-input-1-2' class='rating-star'></label>
                    <input
                      type='radio'
                      class='rating-input'
                      id='rating-input-1-1'
                      name='rating-input-1'
                    />
                    <label for='rating-input-1-1' class='rating-star'></label>
                  </span>
                  <span>
                    <a href='#' class='reviews'>
                      232 customer reviews
                    </a>
                  </span>
                </div>
              </div>
              <span>
                <p>
                  Price:
                  <span class='emphasize'>£ {product.price}</span>
                </p>
                <label for='quantity'>Quantity:</label>
                <select name='quantity' class='select-dropdown'>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                </select>
              </span>
              <div>
                <h2 class='title'>Product Description</h2>
                <div class='subtitle-container'>
                  <span>Size: 1-Pack</span>
                  <span>|</span>
                  <span>Color: Black</span>
                </div>
                <p>{product.description}</p>
              </div>
              <div>
                <button class='my-btn flex-btn'>
                  <span>
                    <img
                      src={`${window.location.origin}/${product.image}`}
                      class='cart-icon'
                    />
                  </span>
                  <span class='btn-text'>Add to Cart</span>
                </button>
                <Link to='/' style={{ color: "black" }}>
                  <button class='my-second-button'>
                    <span class='second-btn-text'>Cancel</span>
                  </button>
                </Link>
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
    image: PropTypes.string
  })
};

Details.defaultProps = {
  product: {}
};

const mapStateToProps = store => {
  return {
    product: store.products.selectedProduct,
    isLoading: store.products.isFetching
  };
};

export default connect(mapStateToProps)(Details);

