import React from "react";

const Overlay = (props) => {
  return (
    <div>
      <div className="overlay">
        <h3>Game is over</h3>
        <p>Your score is {props.score}</p>
        <p className="message">{props.message}</p>
        <button className="btn" onClick={props.close}>
          x
        </button>
      </div>
    </div>
  );
};

export default Overlay;
