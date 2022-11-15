import React from "react";

const circle = ({ clicks, isActive }) => {
  return (
    <div
      className={`circle ${isActive ? "isactive" : ""}`}
      onClick={clicks}
    ></div>
  );
};

export default circle;
