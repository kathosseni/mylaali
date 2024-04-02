import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Card from './Components/Card/Card'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Card />
    </>
  )
}

export default App