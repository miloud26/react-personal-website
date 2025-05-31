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
            Front-End Developer with 3 to 4 years of experience, specialized in
            JavaScript and TypeScript. Expert in React, Redux, React Query,
            Next.js, and Tailwind CSS. I design modern, high-performance, and
            maintainable interfaces with a strong focus on user experience.
            Always seeking continuous improvement and best practices.
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
