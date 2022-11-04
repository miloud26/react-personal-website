import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const { setActiveLink } = useGlobalContext();
  const handleClickTrue = () => {
    setActiveLink(true);
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className="footer section">
      <div className="footer__logo">
        <NavLink to="/">
          <h1 onClick={handleClickTrue}>B Miloud</h1>
        </NavLink>
      </div>
      <div className="footer__content">
        © 2022 Freelancer - Boudjellal Miloud. All rights reserved.
      </div>
      <div className="footer__links">
        <ul>
          <li>
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="https://linkdin.com" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
