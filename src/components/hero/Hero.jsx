import React from "react";
import Button from "../button/Button";
import Divider from "../divider/Divider";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";
import Video from "../../img/viseo-background.mp4";
import { motion } from "framer-motion";
import "./hero.scss";
const BodyHero = () => {
  const transition = { duration: 5, type: "spring" };
  const { setActiveLink } = useGlobalContext();
  const handleClickFalse = () => {
    setActiveLink(false);
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className="body-hero section">
      <div className="body-hero__video">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={transition}
        className="body-hero__content"
      >
        <div className="body-hero__content__intro">
          <Divider text={"Introducing"} />
        </div>
        <div className="body-hero__content__name">
          <span>Hello</span>
          <br />
          <h2>I'm Miloud</h2>
          <br />
          <h1>Boudjellal</h1>
          <p>
            Since beginning my journey as a freelance designer nearby 7 years
            ago, I 've done remote work for agencies, consulted for startup, and
            collaborated with talented people to create digital products.
          </p>
          <div>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={handleClickFalse}
            >
              <Button text={"Contact Me"} />
            </NavLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BodyHero;
