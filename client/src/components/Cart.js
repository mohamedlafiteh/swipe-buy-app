import React, { Component } from "react";
import currencyFormat from "../helpers/currencyFormat";
import { removeFromCart } from ".././actions/cartActions";
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

const mapStateToProps = (state) => ({
  cartProducts: state.cart.products,
});

export default connect(mapStateToProps, { removeFromCart })(Cart);
