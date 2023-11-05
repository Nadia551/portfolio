import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Preloader from "./components/Pre.js";
import Home from "./components/Home.js";
import About from "./components/Certificates";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Navi";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import { Element } from "react-scroll";
function App() {
  const [load, upadateLoad] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App homepagebackground">
      <motion.div className="cursor" variants={variants} animate="default" />

      <Home />
      <Element name="skills">
        <Skill />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Element name="Certificates">
        <Certificates />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;
