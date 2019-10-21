import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <Menu color="blue" inverted>
        <Menu.Item
          as={Link}
          to="/"
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/login"
            name="Login"
            active={activeItem === "Login"}
            onClick={this.handleItemClick}
          >
            Login
          </Menu.Item>

          <Menu.Item
            as={Link}
            to="/sign-up-user"
            name="Join"
            active={activeItem === "Join"}
            onClick={this.handleItemClick}
          >
            Join
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Navbar;
