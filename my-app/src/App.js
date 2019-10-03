import React from 'react';
import './App.css';
import Display from './components/Display';
import Dashboard from './components/Dashboard'

class App extends React.Component {
  // Step 1 set the state with constructor and inside having super and this.state *********Setup
  constructor(props) {
    super(props);
    this.state = {
      strikes: 0,
      balls: 0,
      foul: 0,
    }
  }

  //Functions for the buttons

  ball = () => { // The action of the "ball" button.
    if(this.state.balls === 3) { // "this.state.balls" represents the current state of 0 on line 12
    // If the ball count is equal to 3 then the next click will...
    this.setState({balls: 0, strikes: 0}) // reset the count to zero for both balls and strikes.
  } else { // If NOT then that means you are at ball 3 and the next ball results to a new at bat so you
    this.setState({balls: this.state.balls + 1}); // you're resetting the state with using setState and declaring that the function of current state plus one.
    }
  }

  strike = () => { // The action of the "strike" button.
    if(this.state.strikes === 2) { // "this.state.strikes" represents the current state of 0 on line 11
    // If the strike count is equal to 2 then the next click will be a strike out...  
    this.setState({balls: 0, strikes: 0}) // so you reset the count to zeros
  } else { // If NOT then..
    this.setState({ strikes: this.state.strikes + 1});// you'll add 1
    }
  }
  
  foul = () => { // Same as strike but a foul does not strike a batter out so it does not reset count : 0
    if(this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes +1});
    }
  }


  hit = () => { // If a batter gets a hit another one is next at bat. Reset the count to 0
    this.setState({balls: 0, strikes: 0})
  }
// End of functions

// Step 2 add your render() and inside {} your return() ***************Setup
  render() {
  return (
    <div className="App">
      <Display 
        balls={this.state.balls} //passing the current state for balls to Display.js into line 13
        strikes={this.state.strikes} //passing the current state for strikes to Display.js into line 14
      />
      <Dashboard 
        strikeClick={this.strike} //can be named whatever just as long as it matches on Dashboard.js
        ballClick={this.ball} // the functions you made are being passed with this.functionName
        foulClick={this.foul} // now the buttons in Dashboard.js have the ability thats given by the functions
        hitClick={this.hit}
      />
    </div>
  );
 }
}

export default App;
