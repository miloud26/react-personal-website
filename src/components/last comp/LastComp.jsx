import React from "react";
import "./lastComp.scss";
import Button from "../button/Button";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../context";
import { motion } from "framer-motion";
const LastComp = () => {
  const transition = { duration: 3, type: "spring" };
  const { setActiveLink } = useGlobalContext();
  const handleClickFalse = () => {
    setActiveLink(false);
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <div className="last-comp section">
      <motion.div
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        transition={transition}
        className="last-comp__content"
      >
        <div className="last-comp__content__divider"></div>
        <h1>Lets Work Together</h1>
        <p>
          Let’s work together to bring your ideas to life! With my experience
          and dedication, I’m ready to create high-quality, efficient, and
          beautiful front-end solutions tailored just for you. Contact me, and
          let’s make your project a success!
        </p>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={handleClickFalse}
        >
          <Button text={"Contact Me"} />
        </NavLink>
      </motion.div>
    </div>
  );
};

export default LastComp;
