import { useState } from 'react'
import './App.css'
import TextSliderAnimation from './components/TextSliderAnimation'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

function App() {

  return (
    <div className='w-full '>
    <Navbar />
    <div className='relative w-full h-full'>
    <Outlet />
    </div>

    </div>
  )
}

export default App
