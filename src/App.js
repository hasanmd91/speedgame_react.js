import React, { Component } from "react";
import Circle from "./components/Circle";
import Button from "./components/Button";
import Overlay from "./components/Overlay";
import "./App.css";

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default class App extends Component {
  state = {
    circles: [1, 2, 3, 4],
    overlay: false,
    score: 0,
    current: 0,
    pace: 1000,
  };

  timer;

  clickHandler = (i) => {
    this.setState({ score: this.state.score + 3 });
  };

  nextCirlce = () => {
    let nextActive;

    do {
      nextActive = randomNumber(0, 3);
    } while (nextActive === this.state.current);

    this.setState({ current: nextActive, pace: this.state.pace });
    console.log(this.state.current);
    this.timer = setTimeout(this.nextCirlce, this.state.pace);
  };

  starthandeler = () => {
    this.nextCirlce();
  };

  stopHandeler = () => {
    clearTimeout(this.timer);
  };

  render() {
    return (
      <div className="conatiner">
        <h1>Lets Try to score some goals</h1>
        <div className="circleConatiner">
          {this.state.circles.map((ele, i) => (
            <Circle
              clicks={() => this.clickHandler(i)}
              key={i}
              id={i}
              active={this.state.current === i}
            />
          ))}{" "}
        </div>
        <div>
          <Button text={"start"} startgame={this.starthandeler} />
          <Button text={"End"} startgame={this.stopHandeler} />
        </div>
      </div>
    );
  }
}
