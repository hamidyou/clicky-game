import React from 'react'

const GameOver = props => {
  return (
    <div className='wrapper bg-light text-dark'>
      <p><strong>You already selected that one.  GAME OVER!</strong></p>
      <button className='btn btn-success' onClick={props.game}>Click Here to Play Again</button>
    </div>
  )
}

export default GameOver
