import React from "react";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Home from "./Components/Home";
import Education from "./Components/educationList";
import Contact from "./Components/Contact";
import Projects from "./Components/ProjectList";
import appStyle from "./App.module.css";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
