import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';
import MidSec from './components/Mid-section';
import heros from './heros.json';
import HeroCard from './components/HeroCard'

class App extends Component {


  state = {
    message: "Click an image to begin",
    currentScore: 0,
    topScore: 0,
    heros: heros,
    unselectedHeros: heros
  }


  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];

    }
  }

  selectHero = hero => {
    const findDog = this.state.unselectedHeros.find(item => item.hero === hero);

    if(findDog === undefined) {
        // failure to select a new dog
        this.setState({ 
            message: "You guessed incorrectly!",
            topScore: (this.state.currentScore > this.state.topScore) ? this.state.currentScore : this.state.topScore,
            currentScore: 0,
            heros: heros,
            unselectedHeros: heros
        });
    }
    else {
        // success to select a new dog
        const newHeros = this.state.unselectedHeros.filter(item => item.hero !== hero);
        
        this.setState({ 
            message: "You guessed correctly!",
            currentScore: this.state.currentScore + 1,
            heros: heros,
            unselectedHeros: newHeros
        });
    }

    this.shuffleArray(heros);
};


  render() {
    // console.log(heros);

    return (
      <Router>
        <div className="App">

          <NavBar  message={this.state.message}
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore} />

          <MidSec />

          
          {this.state.heros.map(dog =>
            <HeroCard
            hero={dog.hero}
            image={dog.image}
            selectHero={this.selectHero} 
            currentScore={this.state.currentScore}
            />
          )}
        </div>
      </Router>
    );
  }
}

export default App;
