import { useEffect, useState } from 'react';
import reactLogo from '../public/assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css";


function App() {
  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <>
    <Navbar/>
    <div className="container">
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
    </>
  )
}

export default App
