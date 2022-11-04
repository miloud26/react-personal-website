import React from "react";
import "./cardProject.scss";
import Divider from "../divider/Divider";
import { motion } from "framer-motion";

const CardProject = ({ img, title, text, id }) => {
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
        <h1>{title}</h1>
        <p>{text}</p>
        <div className="project__content__more">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="10.998"
            viewBox="0 0 18 10.998"
          >
            <g
              id="right_arrow_-_icon"
              data-name="right arrow - icon"
              transform="translate(21 -6.501) rotate(90)"
            >
              <path
                id="Path_98"
                data-name="Path 98"
                d="M6.59,11.858a.714.714,0,0,0,.627.38h4.066v8.028a.717.717,0,1,0,1.434,0V12.238h4.066a.713.713,0,0,0,.627-.38.748.748,0,0,0-.02-.745l-4.783-7.77a.709.709,0,0,0-1.214,0L6.61,11.113A.754.754,0,0,0,6.59,11.858Z"
                fill="#fecd1a"
              ></path>
            </g>
          </svg>
          <span>Read More</span>
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
