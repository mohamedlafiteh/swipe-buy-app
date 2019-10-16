import React from "react";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import UserRegistrationForm from "./components/UserRegisterationForm";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
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
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/sign-up-user" component={UserRegistrationForm} />
      </>
    );
  }
}

export default App;
