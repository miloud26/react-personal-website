import React from "react";
import "./skills.scss";
const Skills = ({ title, text, svg }) => {
  return (
    <div className="skills">
      <div className="skills__svg">{svg}</div>
      <div className="skills__title">{title}</div>
      <div className="skills__text">{text}</div>
    </div>
  );
};

export default Skills;
