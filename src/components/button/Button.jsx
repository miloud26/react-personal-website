import React from "react";
import "./button.scss";
const Button = ({ text }) => {
  return (
    <div className="btn">
      <button>{text}</button>
    </div>
  );
};

export default Button;
