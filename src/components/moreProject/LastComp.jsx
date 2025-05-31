import "./lastComp.scss";
import Button from "../button/Button";

import { motion } from "framer-motion";
const LastComp = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className="last-comp section">
      <motion.div
        initial={{ opacity: 0, translateY: "50%" }}
        whileInView={{ opacity: 1, translateY: "0%" }}
        transition={transition}
        className="last-comp__content"
      >
        <div className="last-comp__content__divider"></div>
        <h1>More projects</h1>
        <p>
          I’m always working on new projects and exploring creative ideas. Check
          out more of my work and let’s bring your vision to life! You can Now
          Visie my Github or My linkedIn
        </p>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <a
            href="https://github.com/miloud26/"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/boudjellal-miloud/"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="LinkedIn" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default LastComp;
