import React, { Component } from 'react'
import './Scoreboard.css'

class Scoreboard extends Component {

  state = {
    currentScore: "0",
    highScore: ""
  }


  onButtonClick = event => {
    event.preventDefault()
    let value = Number(this.state.currentScore)
    this.setState({
      currentScore: value + 1
    })

  }

  render() {
    return (
      <div className='wrapper' >
        <p id='currentScore'>
          Your score: {this.state.currentScore}
        </p>
        <p id='highScore'>
          High score: {this.state.highScore}
        </p>


        <button
          onClick={this.onButtonClick}>
          CLICK ME!
          </button>
      </div>
    )
  }
}
export default Scoreboard
