import { useState } from 'react'
// import './App.css'
import HeroSection from './sections/HeroSection'
import NavBar from './sections/NavBar'
import About from './sections/About'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/Style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <HeroSection/>
      <About/>
    </>
  )
}

export default App
