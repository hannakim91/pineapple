import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';

function App() {

  const [buttonText, setButtonText] = useState('Hello')

  const toggleText = () => {
    if (buttonText === 'Hello') {
      setButtonText('World');
    } else {
      setButtonText('Hello');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={toggleText}>{buttonText}</Button>
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

export default App;

// default button text = "hello" on click - change to "world"