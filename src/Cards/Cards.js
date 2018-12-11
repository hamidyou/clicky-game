import React, { Component } from 'react'
import { Card, CardImg, Row, Col, Container } from 'reactstrap'

class Cards extends Component {
  state = {
    clicked: false
  }

  imageClicked = event => {
    event.preventDefault();
    if (this.state.clicked) {
      return alert('Sorry this one was already selected.')
    } else {
      this.setState({
        clicked: true
      })
      return alert('Nice job')
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Card>
            <CardImg top max-width="200px" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          </Card>
        </Container>
      </div>
    )
  }
}

export default Cards
