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
          The technological revolution is changing aspect of our lives, and the
          fabric of society itself. it's also changing the way we learn and what
          we learn
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
