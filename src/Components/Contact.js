import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import contactStyle from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <section id="Contact">
        <div class={contactStyle.contact_Container}>
          <h1 className={contactStyle.contact}>Contact</h1>
          <h3>Hey there!</h3>
          <p className={contactStyle.p_Wrapper}>
            If you're looking to connect or just say hello, the best way to get
            in touch with me is to send me an email at
          </p>
          <p className={contactStyle.email}> dkprioleau@gmail.com</p>
          <a href="https://www.linkedin.com/in/danielle-prioleau/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/dkprioleau">
            <FaGithub />
          </a>
        </div>
      </section>
    </>
  );
}
