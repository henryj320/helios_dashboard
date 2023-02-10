import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Home } from './Home'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Muscle_checker from './pages/Muscle_checker';
import Gym_calendar from './pages/Gym_calendar';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/muscle_checker" element={<Muscle_checker />} />
        <Route path="/gym_calendar" element={<Gym_calendar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
