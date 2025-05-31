import React from "react";
import "./contactIcon.scss";
const ContactIcon = ({ title, svg, text }) => {
  return (
    <div className="contact-icon">
      <div className="icon">{svg}</div>
      <div className="content">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContactIcon;
