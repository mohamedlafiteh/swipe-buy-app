import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/categories.css";
import Filter from "./Filter";
import SearchInput from "./SearchInput";
import { connect } from "react-redux";

class Categories extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    window.location.href = "/add-advert";
  };
  render() {
    const { cartProducts } = this.props;
    return (
      <>
        <div id='flipkart-navbar'>
          <div className='container-c'>
            <div className='row row1'>
              <ul className='largenav pull-right'>
                <li style={{ color: "white" }} className='upper-links'>
                  <Link className='links' to='/about'>
                    About
                  </Link>
                </li>

                <li className='upper-links'>
                  <Link className='links' to='/contact-us'>
                    Contact Us
                  </Link>
                </li>
                <li className='upper-links'>
                  <a className='links' href='#'>
                    More
                  </a>
                </li>

                <li className='upper-links'>
                  <a className='links' href='#'>
                    <svg className='svg1'>
                      <path
                        d='M8.037 17.546c1.487 0 2.417-.93 2.417-2.417H5.62c0 1.486.93 2.415 2.417 2.415m5.315-6.463v-2.97h-.005c-.044-3.266-1.67-5.46-4.337-5.98v-.81C9.01.622 8.436.05 7.735.05 7.033.05 6.46.624 6.46 1.325v.808c-2.667.52-4.294 2.716-4.338 5.98h-.005v2.972l-1.843 1.42v1.376h14.92v-1.375l-1.842-1.42z'
                        fill='#fff'
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className='row row2'>
              <div className='col-sm-2'>
                <h2 className='h-2'>
                  <span className='smallnav menu'>☰ Brand</span>
                </h2>
                <h1 className='h-1'>
                  <span className='largenav'>
                    <Filter />
                  </span>
                </h1>
              </div>
              <div className='flipkart-navbar-search smallsearch col-sm-8 col-xs-11'>
                <SearchInput />
              </div>
              <Link to='/cart'>
                <div className='cart largenav col-sm-2'>
                  <span className='cart-button' style={{ color: "white" }}>
                    <svg className='cart-svg svg-3' viewBox='0 0 16 16 '>
                      <path
                        d='M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86 '
                        fill='#fff '
                      ></path>
                    </svg>{" "}
                    Cart
                    <span className='item-number '>{cartProducts}</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Categories.defaultProps = {
  cartProducts: {},
};

const mapStateToProps = (store) => {
  if (store.cart.products.length == 0) {
    return {
      cartProducts: store.cart.products,
    };
  } else {
    return {
      cartProducts: store.cart.products.length,
    };
  }
};

export default connect(mapStateToProps)(Categories);
