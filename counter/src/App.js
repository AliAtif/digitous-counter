import React from "react";
import Counter from "./components/Counter.jsx";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     count : 0,
    }

  }

  decrementCount = ()=> {

  }

  incrementCount = ()=>{

  }

  render() {
    return (
      <div className="App">

        <h1> Counter </h1>
        <h2>{ this.state.count}</h2>
        <button onClick={this.decrementCount}>-</button>
        <button onClick={this.incrementCount}>+</button>
        < Counter/>

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