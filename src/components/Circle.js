import React from "react";

const circle = ({ clicks, active, id }) => {
  return (
    <div
      className={`circle ${active ? "isactive" : ""}`}
      onClick={clicks}
    ></div>
  );
};

export default circle;
