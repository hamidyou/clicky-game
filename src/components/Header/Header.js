import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <div id='heroDiv'>
        <Jumbotron id='hero' />
      </div>
    )
  }
}

export default Header
