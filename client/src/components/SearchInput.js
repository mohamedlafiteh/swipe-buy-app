import React, { Component } from "react";
import { Input, Icon } from "semantic-ui-react";
import "../styles/itemsList.css";

export class SearchInput extends Component {
  render() {
    return (
      <div className="inputStyle">
        <Input
          icon={<Icon name="search" inverted circular link />}
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default SearchInput;
