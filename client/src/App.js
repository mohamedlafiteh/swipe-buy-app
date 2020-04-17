import React from "react";

import LoginForm from "./components/LoginForm";
import UserRegistrationForm from "./components/UserRegisterationForm";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import ProductsList from "./components/ProductsList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Home from "./components/Home";
import AddAdvertForm from "./components/AddAdvertForm";
import Categories from "./components/Categories";

import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className='App'>
          <Navbar />
        </div>
        <Categories />

        <div className='body-container'>
          <Switch>
            <Route exact path='/login' component={LoginForm} />
            <Route
              exact
              path='/sign-up-user'
              component={UserRegistrationForm}
            />
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component={ProductsList} />
            <Route exact path='/products/:id' component={Details} />

            <Route exact path='/cart' component={Cart} />
            <Route exact path='/add-advert' component={AddAdvertForm} />
            <Route component={ErrorPage} />
          </Switch>
        </div>

        <Footer />
      </>
    );
  }
}

export default App;
