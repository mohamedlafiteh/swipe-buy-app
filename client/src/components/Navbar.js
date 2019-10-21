import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Container, Dropdown } from "semantic-ui-react";
import { isLoggedIn } from "../api/isLoggedIn";
import { logout } from "../api/logout";

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
        {isLoggedIn() ? (
          <Menu.Menu position="right">
            <Menu.Item
              onClick={logout}
              name="logout"
              active={activeItem === "logout"}
            >
              Logout
            </Menu.Item>
          </Menu.Menu>
        ) : (
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
        )}
      </Menu>
    );
  }
}

export default Navbar;
