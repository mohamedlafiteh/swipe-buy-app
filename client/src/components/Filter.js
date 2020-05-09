import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productsActions";
import PropTypes from "prop-types";
import "../styles/filteredProduct.css";

class Filter extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col-md-14 price-div-1'>
          <label>
            <select
              className='form-control'
              value={this.props.sorts}
              onChange={event => {
                this.props.sortProducts(
                  this.props.filteredProducts,
                  event.target.value
                );
              }}
            >
              <option value=''>filter by Price</option>
              <option value='lowestprice'>Lowest to highest</option>
              <option value='highestprice'>Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className='col-md-18 price-div-2'>
          <label>
            {" "}
            <select
              className='form-control'
              value={this.props.category}
              onChange={event => {
                this.props.filterProducts(
                  this.props.products,
                  event.target.value
                );
              }}
            >
              <option value=''>Category</option>
              <option value='phones'>phones</option>
              <option value='shirts'>shirts</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

Filter.defaultProps = {
  products: {},
  filteredProducts: {}
};

const mapStateToProps = state => ({
  products: state.products.products,
  filteredProducts: state.products.filteredProducts,
  category: state.products.category,
  sorts: state.products.sorts
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  Filter
);
