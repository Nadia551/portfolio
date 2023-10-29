import './App.css';
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Preloader from './components/Pre.js'
import Home from './components/Home.js'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Project from './components/Projects';
import Contact from './components/Contact';
import Nav from './components/Navi';
import Skill from './components/Skill';
import Projects from './components/Projects';
function App() {
  const [load, upadateLoad] = useState(true);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
    
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      />
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          
            <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/project' element={<Project />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
  </Routes>
  
        </div>
      </Router>
      <Skill id='skills'/>
      <Projects/>
    </div>

  );
}

export default App;