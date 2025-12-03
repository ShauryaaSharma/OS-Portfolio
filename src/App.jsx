import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Welcome from "../components/welcome.jsx"
import Dock from "../components/Dock.jsx";
import { terminal as TerminalWindow } from "./windows";
import { safari as SafariWindow } from "./windows";
import { resume as ResumeWindow } from "./windows";
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
       <Navbar />
       <Welcome />
       <Dock />

       <TerminalWindow />
       <SafariWindow />
       <ResumeWindow />
    </main>
  )
}

export default App