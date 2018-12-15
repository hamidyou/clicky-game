import React from 'react'
import './Scoreboard.css'

const Scoreboard = props => {
  return (
    <div className='wrapper bg-dark text-light' >
      <p id='currentScore'>
        Your score: {props.currentScore}
      </p>
      <p id='highScore'>
        High score: {props.highScore}
      </p>
    </div>
  )
}
export default Scoreboard
