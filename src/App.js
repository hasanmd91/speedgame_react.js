import React, { Component } from "react";
import Circle from "./components/Circle";
import Button from "./components/Button";
import Overlay from "./components/Overlay";
import "./App.css";

export default class App extends Component {
  state = {
    overlay: false,
  };

  render() {
    return (
      <div className="conatiner">
        <h1>Lets Try to score some goals</h1>
        <Circle />
        <Button text={"text"} />
        {this.state.overlay && <Overlay />}
      </div>
    );
  }
}
