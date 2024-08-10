import { useState, createContext, useEffect } from 'react';
import './App.css';
import './ScrollBar.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Slider from './components/slider/Slider';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';

export const GeneralContext = createContext();

export default function App() {
  const [skillsClicked, setSkillsClicked] = useState(false);

  return (

    <GeneralContext.Provider value={{ skillsClicked, setSkillsClicked }}>
      <Navbar />
      <Slider />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/*  <Router /> */}
      {/* {popUpLogin && <PopUpLogin />}
        {snackbarText && <SnackBar text={snackbarText} />} */}
      {/* <Footer /> */}
    </GeneralContext.Provider>

  );
}


