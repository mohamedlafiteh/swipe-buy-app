import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from ".././actions/productsActions";
import PropTypes from "prop-types";

class FilteredProducts extends Component {
  render() {
    // console.log(this.props.products);
    return (
      <div className='row'>
        <div className='col-md-4'>{`${this.props.filteredProducts.length} products found.`}</div>
        <div className='col-md-4'>
          <label>
            Order by
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
              <option value=''>Select</option>
              <option value='lowestprice'>Lowest to highest</option>
              <option value='highestprice'>Highest to lowest</option>
            </select>
          </label>
        </div>
        <div className='col-md-4'>
          <label>
            {" "}
            Filter category
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
              <option value=''>ALL</option>
              <option value='phones'>phones</option>
              <option value='shirts'>shirts</option>
            </select>
          </label>
        </div>
      </div>
    );
  }
}

FilteredProducts.defaultProps = {
  product: {},
  filteredProducts: {}
};

const mapStateToProps = state => ({
  products: state.products.products,
  filteredProducts: state.products.filteredProducts,
  category: state.products.category,
  sorts: state.products.sorts
});
export default connect(mapStateToProps, { filterProducts, sortProducts })(
  FilteredProducts
);
