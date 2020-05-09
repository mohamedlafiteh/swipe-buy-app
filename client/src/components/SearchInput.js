import React, { Component } from "react";
import { searchFilter } from ".././actions/productsActions";
import { connect } from "react-redux";

export class SearchInput extends Component {
  handleChange = e => {
    this.props.searchFilter(this.props.products, e.target.value);
  };
  render() {
    return (
      <div className='row'>
        <input
          className='flipkart-navbar-input col-xs-11'
          type='search'
          placeholder='Search for Products....'
          name='text'
          value={this.props.inputValue}
          onChange={this.handleChange}
        />
        <button className='flipkart-navbar-button col-xs-1'>
          <svg className='svg-2'>
            <path d='M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 '></path>
          </svg>
        </button>
      </div>
    );
  }
}

SearchInput.defaultProps = {
  productS: {},
  inputValue: ""
};

const mapStateToProps = state => ({
  products: state.products.filteredProducts,
  inputValue: state.products.inputValue
});

export default connect(mapStateToProps, { searchFilter })(SearchInput);
