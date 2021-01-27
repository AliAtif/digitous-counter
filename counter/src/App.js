import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     count : 0,
    }

  }
  render() {
    return (
      <div className="App">

        <h1> Counter </h1>
        <h2>{ this.state.count}</h2>
        <button onClick={this.decrementCount}>-</button>
        <button onClick={this.incrementCount}>+</button>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;