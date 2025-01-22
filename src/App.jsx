import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Menu from './components/Menu'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {


  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/About' element={<About/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
