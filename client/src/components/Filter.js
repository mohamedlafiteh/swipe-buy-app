import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterProducts,
  sortProductsByPrice,
} from "../actions/productsActions";
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
              value={this.props.priceSort}
              onChange={(event) => {
                this.props.sortProductsByPrice(event.target.value);
              }}
            >
              <option value=''>filter by Price</option>
              <option value='lowestPrice'>Lowest to highest</option>
              <option value='highestPrice'>Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className='col-md-18 price-div-2'>
          <label>
            {" "}
            <select
              className='form-control'
              value={this.props.category}
              onChange={(event) => {
                this.props.filterProducts(event.target.value);
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

// Filter.defaultProps = {
//   products: {},
// };

const mapStateToProps = (state) => ({
  category: state.products.category,
  priceSort: state.products.priceSort,
});
export default connect(mapStateToProps, {
  filterProducts,
  sortProductsByPrice,
})(Filter);
