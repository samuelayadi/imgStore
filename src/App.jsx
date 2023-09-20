import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import React from 'react'
import Form from './pages/LogIn/Login';
import Gallery from './pages/MainImageGallery/Gallery';
import SignupPage from './pages/SignUp/SignupPage';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
           <Route path='login' element={<Form/>}/>
           <Route path='gallery' element={<Gallery/>}/>
           <Route path='signup' element={<SignupPage/>}/>
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App