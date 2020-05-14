import React from "react";
import LoginForm from "./components/LoginForm";
import UserRegistrationForm from "./components/UserRegisterationForm";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Admin from "./components/Admin/Admin";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Home from "./components/Home";
import AddAdvertForm from "./components/AddAdvertForm";
import Categories from "./components/Categories";
import About from "./components/About";
import ContactUs from "./components/ContactUs";

import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className='app-container'>
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
              <Route exact path='/admin' component={Admin} />
              <Route exact path='/products/:id' component={Details} />

              <Route exact path='/cart' component={Cart} />
              <Route exact path='/add-advert' component={AddAdvertForm} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact-us' component={ContactUs} />
              <Route component={ErrorPage} />
            </Switch>
          </div>

          <Footer />
        </div>
      </>
    );
  }
}

export default App;
