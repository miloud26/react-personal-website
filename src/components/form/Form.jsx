import React from "react";
import "./form.scss";
import Button from "../button/Button";
const Form = () => {
  return (
    <form className="form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message*" />
      <Button text={"Send"} />
    </form>
  );
};

export default Form;
