import React, { Component } from 'react'
import './App.css'
import Header from './Header/Header'
import Scoreboard from './Scoreboard/Scoreboard'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Scoreboard score='4' highScore='6' />
    </div>
  )
}

export default App
