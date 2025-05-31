import React from "react";
import "./button.scss";
const Button = ({ text, type }) => {
  return (
    <div className="btn">
      <button type={type === "1" ? "submit" : "button"}>{text}</button>
    </div>
  );
};

export default Button;
