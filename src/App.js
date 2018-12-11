import React, { Component } from 'react'
import './App.css'
import Header from './Header/Header'
import Scoreboard from './Scoreboard/Scoreboard'
import Cards from './Cards/Cards'
import movies from './images/images.json'
import { concat, includes } from 'kyanite/dist/kyanite'

class App extends Component {
  state = {
    selected: [],
    currentScore: "0",
    highScore: "2"
  }

  checkScore = score => score > this.state.highScore ? this.setState({ highScore: score }) : null

  selectMovie = id => {
    const selectedMovies = this.state.selected
    if (includes(id, selectedMovies)) {
      return alert('Game over....you lose!')
    } else {
      let score = this.state.currentScore
      this.setState({
        currentScore: score++
      })
      this.checkScore(this.state.currentScore)
      this.setState({
        selected: concat(id, selectedMovies)
      })
    }
  }

  render() {
    return (
      <div className='App' >
        <Header />
        <Scoreboard />
        {movies.map(movie => (
          <Cards
            selectMovie={this.selectMovie}
            id={movie.id}
            key={movie.id}
            image={movie.src}
          />))}
      </div>
    )
  }

}

export default App
