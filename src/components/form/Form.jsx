import React from "react";
import "./form.scss";
import Button from "../button/Button";
const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("text").value = "";
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input id="text" type="text" placeholder="Your Name" />
      <input id="email" type="email" placeholder="Your Email" />
      <textarea id="msg" placeholder="Your Message*" />
      <Button type={"1"} text={"Send"} />
    </form>
  );
};

export default Form;
