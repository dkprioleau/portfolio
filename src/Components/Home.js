import React from 'react';
import logo from "./pictures/Logo.png";
import homeStyle from "./Home.module.css";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
  } from "react-icons/fa";
  import { SiJavascript } from "react-icons/si";
  // importing react icons

export default function Home() {
  return (
    <section id="Home" className={homeStyle.home_Container}>
        <div className={homeStyle.banner_holder}>
          <div className={homeStyle.left_Banner}>
            <h1 >Hello</h1>
            <p>
              Welcome to my portfolio! <br/>I'm passionate about creating 
              sleek web applications that better people's daily lives. Feel free to
              look at my projects and contact me 
            </p>
             <a className={homeStyle.contact_Button} href="#Contact">Contact</a>
            <div className={homeStyle.languages}>
              <FaHtml5 title="html" className={homeStyle.html}/>
              <FaCss3Alt title="CSS"className={homeStyle.css} />
              <SiJavascript title="javaScript"className={homeStyle.javascript} />
              <FaReact title="react"className={homeStyle.react}/>
              {/* imported icons */}
            </div>
          </div>

          <div className={homeStyle.right_Banner}>
            <img src={logo} alt="logo" width="200px" />
          </div>
        </div>
      </section>
  )
}
