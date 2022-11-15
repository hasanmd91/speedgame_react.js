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
    isActive: false,
    activeNum: 0,
    nextActiveNum: "",
  };

  gameCircle = () => {
    return (
      <div className="circleConatiner">
        {this.state.circles.map((ele, id) => (
          <Circle
            clicks={() => this.circleHandler(id)}
            isActive={this.state.isActive}
          />
        ))}{" "}
      </div>
    );
  };

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  newCircle = (activeNum) => {
    let nextActiveNum = this.randomNumber(0, 3);
    if (activeNum !== nextActiveNum) {
      return nextActiveNum;
    } else {
      return this.newCircle(activeNum);
    }
  };

  gamehandeler = () => {
    this.setState({ gameIsOn: true });
    let nextActiveNum = this.newCircle(this.state.activeNum);
    console.log(nextActiveNum);
  };

  circleHandler = (id) => {
    console.log(id);
  };

  render() {
    return (
      <div className="conatiner">
        <h1>Lets Try to score some goals</h1>
        {this.gameCircle()}
        <Button text={"start"} startgame={this.gamehandeler} />
        {this.state.overlay && <Overlay />}
      </div>
    );
  }
}
