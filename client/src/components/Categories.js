import React, { Component } from "react";
import { Dropdown, Button } from "semantic-ui-react";
import "../styles/categories.css";

export class Categories extends Component {
  handleClick = () => {
    window.location.href = "/add-advert";
  };
  render() {
    return (
      <div className="categories ">
        <Dropdown text="Categories" search selection />
        <div className="advert-form">
          <Button onClick={this.handleClick} color="white">
            Add Advert
          </Button>
        </div>
      </div>
    );
  }
}

export default Categories;
