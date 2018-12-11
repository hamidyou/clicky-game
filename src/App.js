import React, { Component } from 'react'
import './App.css'
import Header from './Header/Header'
import Scoreboard from './Scoreboard/Scoreboard'
import Cards from './Cards/Cards'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Scoreboard />
      <Cards />
    </div>
  )
}

export default App
