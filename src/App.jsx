import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './pages/hero/Hero'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'
import MockPage from './pages/hero/MockPage'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <main className='relative'>
        <MockPage />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export default App
