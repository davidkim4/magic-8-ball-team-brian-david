import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: [
        "You betcha!",
        "Don't count on it.",
        "Idk, go ask a real person.",
        "Like and subscribe!",
      ],
      question: "",
    };
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state;
    // write your code here!
    //math.random returns a # between 0 inclusive and 1 exclusive. math.floor returns the greatest integer less than or equal to its numeric argument.
    let shownAnswer = Math.floor(Math.random() * 4);
    // Update the return statement below to reflect the outcome of your code.
    return answerArray[shownAnswer];
  };

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value });
  };

  handleSubmit = () => {
    // destructures question out of state
    const { question } = this.state;
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer();
    this.setState({ answer: answer });
  };

  render() {
    return (
      <div>
        <h1>Magic <span id= "number">8</span> Ball</h1>
        <input id="inputBox" type="text" onChange={this.handleChange} />
        <br />
        <button id= "button" onClick={this.handleSubmit}>
          Ask the Magic 8 Ball a Question
        </button>
        <p> {this.state.answer} </p>
      </div>
    );
  }
}

export default App;
