import React from "react";
import aboutStyle from "./About.module.css";

export default function About() {
  return (
    <>
      <section id="About">
        <div  className={aboutStyle.about_Container}>
          <h1 className={aboutStyle.about}>About Me</h1>
          <p className={aboutStyle.text_Wrapper}>
            My name is Danielle Prioleau and I’m a frontend developer who enjoys
            collaborating and building web applications. I like creating simple
            sleek responsive interfaces for others to use and enjoy. I first was
            introduced to the web development world by taking a basic course in
            undergrad as a part of my communications degree. I later on pursued
            this field by attending the frontend track at Reskill Americans, a
            software engineering bootcamp. Right after I was accepted into Code
            The Dream’s advanced course where I learned and strengthened my
            React skills. I believe that my former background in communications/
            events gives me a foundation in problem solving and collaboration
            with others . . . . .
          </p>

          <h3>Fun Facts</h3>
          <ul>
            <li>
              I used to work as a Professional Intern for the Walt Disney
              Company
            </li>
            <li>I have gotten rabies shots</li>
            <li>Gluten Free</li>
            <li>Love zumba</li>
          </ul>
        </div>
      </section>
    </>
  );
}
