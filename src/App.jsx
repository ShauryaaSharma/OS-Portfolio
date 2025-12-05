import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Welcome from "../components/welcome.jsx"
import Dock from "../components/Dock.jsx";
import Desktop from "../components/Desktop.jsx";
import { terminal as TerminalWindow } from "./windows";
import { safari as SafariWindow } from "./windows";
import { resume as ResumeWindow } from "./windows";
import { finder as FinderWindow } from "./windows";
import { text as TextWindow } from "./windows";
import { imageMultiple as ImageWindows } from "./windows";
import { photos as PhotosWindow } from "./windows";
import { contact as ContactWindow } from "./windows";
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
       <Navbar />
       <Welcome />
       <Desktop />
       <Dock />

       <TerminalWindow />
       <SafariWindow />
       <ResumeWindow />
       <FinderWindow />
       <TextWindow />
       <PhotosWindow />
       <ContactWindow />
       <ImageWindows />
    </main>
  )
}

export default App