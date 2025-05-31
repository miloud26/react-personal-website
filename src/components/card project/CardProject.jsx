import React from "react";
import "./cardProject.scss";
import Divider from "../divider/Divider";
import { motion } from "framer-motion";
import Button from "../button/Button";

const CardProject = ({ img, title, text, id, github, live }) => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div
      className="project section"
      style={id % 2 === 1 ? { flexDirection: "row-reverse" } : {}}
    >
      <motion.div
        initial={
          id % 2 === 1
            ? { translateX: "100%", opacity: 0 }
            : { translateX: "-100%", opacity: 0 }
        }
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={transition}
        className="project__content"
      >
        <div style={{ marginLeft: "10px" }}>
          <Divider text={`Project ${id}`} />
        </div>
        <h2>{title}</h2>
        <p>{text}</p>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a href={github} target="_blank">
            <Button text="Github" />
          </a>
          <a href={live} target="_blank">
            <Button text="Live Demo" />
          </a>
        </div>
      </motion.div>
      <motion.div
        initial={
          id % 2 === 1
            ? { translateX: "-100%", opacity: 0 }
            : { translateX: "100%", opacity: 0 }
        }
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={transition}
        className="project__img"
      >
        <img src={img} alt="project img" />
      </motion.div>
    </div>
  );
};

export default CardProject;
