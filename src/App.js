import React, { Component } from "react";
import Circle from "./components/Circle";
import Button from "./components/Button";
import Overlay from "./components/Overlay";
import "./App.css";

export default class App extends Component {
  state = {
    circles: [1, 2, 3, 4],
    overlay: false,
    score: 0,
    count: 0,
    rounds: 0,
    gameIsOn: false,
  };

  secondmethod = () => {
    let noora = "second method is called";
    console.log(noora);
  };

  clickHandler = (id) => {
    console.log(id);
    this.setState({ score: this.state.score + 1 });
    this.secondmethod();
  };

  render() {
    return (
      <div className="conatiner">
        <h1>Lets Try to score some goals</h1>
        <div className="circleConatiner">
          {this.state.circles.map((ele, id, index) => (
            <Circle clicks={() => this.clickHandler(id)} />
          ))}{" "}
        </div>

        <Button text={"text"} />
        {this.state.overlay && <Overlay />}
      </div>
    );
  }
}
