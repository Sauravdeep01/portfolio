import React from "react"
import { useState } from "react";
import IntroAnimation from "./Components/IntroAnimation";

import StarsBackground from "./Components/StarsBackground"
import Navbar from "./Components/Navbar/Navbar"
import About from "./Components/About/About"
import Skills from "./Components/Skills/Skills"
import Projects from "./Components/Projects/Projects"
import Education from "./Components/Education/Education"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

function App() {

  const [showIntro, setShowIntro] = useState(true);

  return (

    <>
      {/* 1. Conditional Rendering for Intro OR Main Portfolio */}
      {showIntro ? (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      ) : (
        // 🌟 MAIN PORTFOLIO CONTAINER (Replaces the two separate divs)
        <div className="relative min-h-screen">
          
          {/* BACKGROUND: Rendered as a backdrop */}
          <StarsBackground /> 

          {/* CONTENT: This div sits on top of the background (z-10 ensures visibility) */}
          <div className="relative pt-10 z-10"> 
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  )
}

export default App