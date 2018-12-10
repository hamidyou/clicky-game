import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <div id='heroDiv'>
        <Jumbotron id='hero'>
          <h1 className='display-3'>Disney Memory</h1>
        </Jumbotron>
      </div>
    )
  }
}

export default Header
