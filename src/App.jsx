import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue.jsx';
import Red from './components/Red.jsx';
import Home from './components/Home.jsx';
import './App.css'

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">{<><Link to='/'>Feelin' Homesick?</Link>
                            <Link to='/blue'>Feelin' Blue?</Link>
                            <Link to='/red'>Do you Bleed?</Link></>

        }</div>
        <div id="main-section">{<Routes>
                                    <Route path='/' element={<Home />}/>
                                    <Route path='/blue' element={<Blue />}/>
                                    <Route path='/red' element={<Red />}/>
                                </Routes>}</div>
      </div>
    </>
  )
}

export default App
