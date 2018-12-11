import React, { Component } from 'react'
import { Card, CardImg, Row, Col, Container } from 'reactstrap'

const Cards = props => (
  <div>
    <Card onClick={props.selectMovie} id={props.id}>
      <CardImg src={props.image} />
    </Card>
  </div>
)

export default Cards
