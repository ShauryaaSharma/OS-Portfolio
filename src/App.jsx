import React from 'react'
import Navbar from "../components/Navbar.jsx";
import Welcome from "../components/welcome.jsx"
import { Dock } from 'lucide-react';

const App = () => {
  return (
    <main>
       <Navbar />
       <Welcome />
       <Dock />
    </main>
  )
}

export default App