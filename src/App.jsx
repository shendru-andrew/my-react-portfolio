import { useState } from 'react'
// import './App.css'
import HeroSection from './sections/HeroSection'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection/>
    </>
  )
}

export default App
