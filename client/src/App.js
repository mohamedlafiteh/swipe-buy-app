import React from "react";
import Categories from "./components/Categories";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          model: "cs",
          picture:
            "https://vcache.arnoldclark.com/imageserver/AORSNFC3D6-CUS4/800/f(200 kB)https://vcache.arnoldclark.com/imageserver/AORSNFC3D6-CUS4/800/f"
        },
        {
          id: 2,
          model: "fg",
          picture:
            "https://vcache.arnoldclark.com/imageserver/CPCZ_GU3C6INISJ/800/f(90 kB)https://vcache.arnoldclark.com/imageserver/CPCZ_GU3C6INISJ/800/f"
        },
        {
          id: 3,
          model: "vb",
          picture:
            "https://vcache.arnoldclark.com/imageserver/ACRSNYB4F1-VUS3/350/f(15 kB)https://vcache.arnoldclark.com/imageserver/ACRSNYB4F1-VUS3/350/f"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <h1>app</h1>
        <Categories />
      </div>
    );
  }
}

export default App;
