import React, { Component } from "react";
import currencyFormat from "../helpers/currencyFormat";
import {
  removeFromCart,
  AddMoreSameItemInCart,
  removeSomeOfItemsInCart,
} from ".././actions/cartActions";
import { connect } from "react-redux";

import "../styles/cart.css";

export class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cartProducts } = this.props;
    return (
      <div className='alert alert-info'>
        {cartProducts.length === "undefined" ? (
          "Basket is empty"
        ) : (
          <div>
            You have {cartProducts.length} items in the basket. <hr />
          </div>
        )}
        {cartProducts.length > 0 ? (
          <div>
            <ul style={{ marginLeft: -25 }}>
              {cartProducts.map((item) => (
                <li key={item.id}>
                  <b>{item.title}</b>
                  <button
                    style={{ float: "right" }}
                    className='btn primary btn-xs'
                    onClick={(e) =>
                      this.props.AddMoreSameItemInCart(
                        this.props.cartProducts,
                        item
                      )
                    }
                  >
                    Add
                  </button>
                  <button
                    style={{ float: "right" }}
                    className='btn primary btn-xs'
                    onClick={(e) =>
                      this.props.removeSomeOfItemsInCart(
                        this.props.cartProducts,
                        item
                      )
                    }
                  >
                    Reduce
                  </button>
                  <button
                    style={{ float: "right" }}
                    className='btn btn-danger btn-xs'
                    onClick={(e) =>
                      this.props.removeFromCart(this.props.cartProducts, item)
                    }
                  >
                    X
                  </button>
                  <br />
                  {item.count} X {currencyFormat.currencyFormat(item.price)}
                </li>
              ))}
            </ul>

            <b>
              Sum:{" "}
              {currencyFormat.currencyFormat(
                cartProducts.reduce((a, c) => a + c.price * c.count, 0)
              )}
            </b>
            <button
              onClick={() => alert("Todo: Implement checkout page.")}
              className='btn btn-primary'
            >
              checkout
            </button>
          </div>
        ) : (
          "No Items"
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.cart.products.length == 0) {
    return {
      cartProducts: state.cart.products,
    };
  } else {
    return {
      cartProducts: state.cart.products,
      count: state.cart.products.map((item) => item.count),
    };
  }
};

export default connect(mapStateToProps, {
  removeFromCart,
  AddMoreSameItemInCart,
  removeSomeOfItemsInCart,
})(Cart);
