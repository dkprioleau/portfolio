import React, { useState } from "react";
import logo from "./pictures/Logo.png";
import navStyle from "./Nav.module.css";

export default function Nav() {
  // dark mode toggle
  const [darkmode, setDarkmode] = useState(false);
  console.log(darkmode);

  return (
    <>
      <nav>
        <a href="#Home">
          <img src={logo} alt="logo" width="80px" />
        </a>

        <ul className={navStyle.ul}>
          <li>
            {darkmode ? <h1>now in dark mode</h1> : null}
            <button onClick={() => setDarkmode(!darkmode)}>dark mode</button>
            {/* this works but it shouldnt??? */}
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Education">Education</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
