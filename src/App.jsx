import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Card from './Components/Card/Card'
import Rules from './Components/Rules/Rules'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Card />
      <Rules />
      <Footer />
    </>
  )
}

export default App