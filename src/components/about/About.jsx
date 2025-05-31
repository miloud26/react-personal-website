import React from "react";
import "./about.scss";
import Divider from "../divider/Divider";
import Button from "../button/Button";
import Skills from "../cardSkills/Skills";
import { dataCard } from "../../local data/dataCard";
import FileCV from "../../img/Dosis.zip";
import { motion } from "framer-motion";
const About = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="about section">
      <motion.div
        initial={{ translateX: "-100%", opacity: 0 }}
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={transition}
        className="about__card"
      >
        {dataCard.map((item) => {
          return (
            <div
              key={item.id}
              className={item.id === 1 || item.id === 3 ? "marginTop" : ""}
            >
              <Skills {...item} />
            </div>
          );
        })}
      </motion.div>
      <motion.div
        initial={{ translateX: "100%" }}
        whileInView={{ translateX: "0%" }}
        transition={transition}
        className="about__content"
      >
        <Divider text={"My Skills"} />
        <h1>Why Hire Me For Next Project?</h1>
        <p>
          I’m skilled in modern web tech—React, Next.js, Node.js—and I combine
          clean, responsive design with robust back-end solutions. My quick
          learning, team spirit, and analytical mindset ensure I deliver
          high-quality work efficiently.
        </p>

        <div className="about__cv">
          <a
            href="https://www.linkedin.com/in/boudjellal-miloud/"
            target="_blank"
          >
            <Button text={"LinkedIn"} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
