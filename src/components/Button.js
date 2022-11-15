import React from "react";

const button = ({ text, startgame }) => {
  return (
    <button className="play" onClick={startgame}>
      {text}
    </button>
  );
};

export default button;
