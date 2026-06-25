import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/footer/Footer'
import { Route, Routes } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Articles from './components/Articles'
import Contact from './components/Contact'

const App = () => {

  




  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/articles' element={<Articles/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      
      <Footer/>
    </div>
  )
}

export default App
