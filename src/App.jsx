import { useState } from 'react'
import './App.css'
import TextSliderAnimation from './components/TextSliderAnimation'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='w-full '>
    <Navbar />
    <Home />

    </div>
  )
}

export default App
