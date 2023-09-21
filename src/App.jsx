import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import React from 'react'
import LoginForm from './pages/LogIn/Login';
import SignupPage from './pages/SignUp/SignupPage';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/gallery" element={<Home/>} />
           <Route path='/' element={<LoginForm/>}/>
           <Route path='signup' element={<SignupPage/>}/>
        </Routes>
    </BrowserRouter>

    </>
  )
}

export default App