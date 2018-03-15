import React, { Component } from "react";
import "../styles/App.css";
import { Tabs } from "./navs/Tabs";
import { Panes } from "./navs/Panes";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Tabs />
        <Panes />
      </div>
    );
  }
}

export default App;
