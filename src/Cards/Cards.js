import React from 'react'
import { Col } from 'reactstrap'
import './Cards.css'

const Cards = props => {
  return (<div>
    <Col>
      <section onClick={() => props.selectMovie(props.id)} id={props.id}>
        <img alt='' src={props.image} />
      </section>
    </Col>
  </div>
  )
}

export default Cards
