import React, { Component } from "react";
import Input from "./components/UserInput";
import "./App.css";
import Output from "./components/UserOutput";

class App extends Component {
    state = {
      username: "raider"
    };
  

  render() {
    return (
      <div className="App">
        <Input change={this.changeNameHandler} />
        <Output username={this.state.username} />
      </div>
    );
  }

  
  changeNameHandler = (event) => {
    this.setState({ username: event.target.value})
  
  }
}

export default App;
