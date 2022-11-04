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
          The technological revolution is changing aspect of our lives, and the
          fabric of society itself. it's also changing the way we learn and what
          we learn. Factual knowledge is less prized when everything you ever
          need to know can be found on your phone. There's no imperative to be
          an expert at doing everything when you can.
        </p>

        <div className="about__cv">
          <a href={FileCV} download>
            <Button text={"Download CV"} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
