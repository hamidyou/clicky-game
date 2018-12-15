import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Scoreboard from './components/Scoreboard/Scoreboard'
import Cards from './components/Cards/Cards'
import moviesArray from './images/images.json'
import Title from './components/Title/Title'
import GameOver from './components/GameOver/GameOver'
import { concat, includes, slice, gte } from 'kyanite/dist/kyanite'

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return slice(0, 12, array)
}

class App extends Component {

  state = {
    selected: [],
    currentScore: 0,
    highScore: 0,
    movies: shuffleArray(moviesArray),
    game: true
  }

  selectMovie = id => {
    const selectedMovies = this.state.selected
    if (includes(id, selectedMovies)) {
      this.setState({ game: false })
    } else {
      this.setState({
        currentScore: this.state.currentScore + 1,
        selected: concat(id, selectedMovies),
        movies: shuffleArray(moviesArray)
      })
    }
  }

  restartGame = () => {
    this.setState({
      game: true,
      currentScore: 0,
      highScore: this.state.highScore,
      movies: shuffleArray(moviesArray)
    })
  }


  render() {
    return (
      <div className='App' >
        <Header />
        <Title></Title>
        {
          this.state.game ?
            <Scoreboard
              currentScore={this.state.currentScore}
              highScore={gte(this.state.highScore, this.state.currentScore)
                ? this.state.currentScore
                : this.state.highScore}
            />
            : <GameOver game={this.restartGame} />
        }
        <div class='grid'>
          {this.state.movies.map(movie => (
            <Cards
              selectMovie={this.selectMovie}
              id={movie.id}
              key={movie.id}
              image={movie.src}
            />))}
        </div>

      </div>
    )
  }

}

export default App
