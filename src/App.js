import React, { Component } from "react";
import Circle from "./components/Circle";
import Button from "./components/Button";
import Overlay from "./components/Overlay";
import Click from "./assets/sounds/click.wav";
import Gameover from "./assets/sounds/gameover.wav";
import Start from "./assets/sounds/starter.wav";
import "./App.css";

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const click = new Audio(Click);
const gameOver = new Audio(Gameover);
const starts = new Audio(Start);

export default class App extends Component {
  state = {
    circles: [1, 2, 3, 4],
    overlay: false,
    score: 0,
    current: undefined,
    pace: 1000,
    gameOver: false,
    rounds: 0,
    gameisOn: false,
  };

  timer; // global variable to clear the timeout

  clickHandler = (i) => {
    if (this.state.gameisOn) {
      if (this.state.current !== i) {
        this.stopHandeler();
        return;
      } else {
        click.play();
        this.setState({
          score: this.state.score + 1,
          rounds: 0,
        });
      }
    }
  };

  nextCirlce = () => {
    let nextActive;

    do {
      nextActive = randomNumber(0, this.state.circles.length - 1);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });
    this.timer = setTimeout(this.nextCirlce, this.state.pace);
    if (this.state.rounds >= 3) {
      this.stopHandeler();
    }
  };

  starthandeler = () => {
    starts.play();
    this.nextCirlce();
    this.setState({ gameisOn: true });
  };

  stopHandeler = () => {
    gameOver.play();
    clearTimeout(this.timer);
    this.setState({ gameOver: !this.state.overlay });
  };

  closehandeler = () => {
    window.location.reload();
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
          {!this.state.gameisOn && (
            <Button text={"start"} startgame={this.starthandeler} />
          )}
          {this.state.gameisOn && (
            <Button text={"End"} startgame={this.stopHandeler} />
          )}
        </div>
        {this.state.gameOver && (
          <Overlay close={this.closehandeler} score={this.state.score} />
        )}
      </div>
    );
  }
}
