import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Container, Dropdown, Image } from "semantic-ui-react";
import { isLoggedIn } from "../api/isLoggedIn";
import { logout } from "../api/logout";
import ".././styles/navbar.css";
import pic from "./nav.png";

export class Navbar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <>
        <Menu className='navContainer' inverted color='black '>
          <Image className='nav-logo' src={pic} />
          <div className='first-items'>
            <Menu.Item
              as={Link}
              to='/'
              name='Swipe Buy'
              active={activeItem === "Swipe Buy"}
              onClick={this.handleItemClick}
            >
              Swipe Buy
            </Menu.Item>
            <Menu.Item
              as={Link}
              to='/'
              name='Home'
              active={activeItem === "Home"}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
            <Menu.Item
              as={Link}
              to='/products'
              name='products'
              active={activeItem === "products"}
              onClick={this.handleItemClick}
            >
              Products
            </Menu.Item>
          </div>

          {isLoggedIn() ? (
            <Menu.Menu position='right' className='second-items'>
              <Menu.Item
                onClick={logout}
                name='logout'
                active={activeItem === "logout"}
              >
                Logout
              </Menu.Item>
            </Menu.Menu>
          ) : (
            <Menu.Menu position='right'>
              <Menu.Item
                className='second-items'
                as={Link}
                to='/login'
                name='Login'
                active={activeItem === "Login"}
                onClick={this.handleItemClick}
              >
                Login
              </Menu.Item>

              <Menu.Item
                className='second-items'
                as={Link}
                to='/sign-up-user'
                name='Join'
                active={activeItem === "Join"}
                onClick={this.handleItemClick}
              >
                Join
              </Menu.Item>
            </Menu.Menu>
          )}
        </Menu>
      </>
    );
  }
}

export default Navbar;
