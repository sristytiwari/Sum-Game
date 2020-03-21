import React from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './Quiz';


function App() {
  return (
    <div className="App">
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
          Welcome to React project
        </a>
      </header>
    <Quiz/>
    </div>
  );
}

export default App;
