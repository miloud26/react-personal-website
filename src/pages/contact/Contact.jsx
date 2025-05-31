import React from "react";
import "./contact.scss";
import Divider from "../../components/divider/Divider";
import { contactData } from "../../local data/contactData";
import ContactIcon from "../../components/contact moyenn/ContactIcon";
import { motion } from "framer-motion";
import Form from "../../components/form/Form";
const Contact = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="contact section">
      <motion.div
        initial={{ translateX: "-100%", opacity: 0 }}
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={transition}
        className="contact__content"
      >
        <Divider text={"Contact Me"} />
        <h1>Get In Touch With Me</h1>
        <p>
          Feel free to get in touch with me anytime! Whether you have a project
          idea, questions, or want to discuss collaboration, I’m here to help.
          Let’s connect and start building something great together.
        </p>
        <div className="contact__content__btn-icon">
          {contactData.map((item) => {
            return <ContactIcon key={item.id} {...item} />;
          })}
        </div>
      </motion.div>
      <motion.div
        initial={{ translateX: "100%", opacity: 0 }}
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={transition}
        className="contact__form"
      >
        <Form />
      </motion.div>
    </div>
  );
};

export default Contact;
