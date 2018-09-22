import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';
import MidSec from './components/Mid-section';
import dogs from './dogs.json';
import DogCard from './components/DogCard'

class App extends Component {


  state = {
    message: "click an image to begin",
    currentScore: 0,
    topScore: 0,
    dogs: dogs,
    clickedDogs: []
  }


  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];

    }
  }

  removeDog = breed => {
    if (this.state.clickedDogs.includes(breed)) {
     

      alert("You Lose");
      console.log("You Lose");
      this.state.topScore = this.state.currentScore;
      this.state.currentScore = 0;
      const clickedDogs = []
      this.setState({ clickedDogs: clickedDogs });
    }
    else if (!this.state.clickedDogs.includes(breed)) {
      this.state.clickedFriends.push(breed);
      console.log("you clicked a new friend");
      console.log(this.state.clickedDogs);
      this.state.currentScore++;
      console.log(this.state.currentScore);
    }
    // if (this.state.currentScore == 10) {
    //   alert("You Win")
    // }

    const dogs = this.shuffleArray(this.state.dogs);
    // Set this.state.friends equal to the new friends array
    this.setState({ dogs: dogs });
  }







  render() {
    console.log(dogs);

    return (
      <Router>
        <div className="App">

          <NavBar />

          <MidSec />
          {this.state.dogs.map(dog =>
            <DogCard
              removeDog={this.removeDog}
              breed={dog.breed}
              image={dog.image}
            />
          )}
        </div>
      </Router>
    );
  }
}

export default App;
