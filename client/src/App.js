import React from "react";

import LoginForm from "./components/LoginForm";
import UserRegistrationForm from "./components/UserRegisterationForm";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import ItemList from "./components/ItemsList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Home from "./components/Home";

import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/sign-up-user" component={UserRegistrationForm} />
          <Route exact path="/products" component={ItemList} />
          <Route exact path="/" component={Home} />

          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />

          <Route component={ErrorPage} />
        </Switch>
        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
