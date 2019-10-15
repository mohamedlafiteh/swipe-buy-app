import React from "react";
import Categories from "./components/Categories";
import Login from "./components/Login";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>HEADER</h1>
        <Login />
        <Categories />
      </div>
    );
  }
}

export default App;
