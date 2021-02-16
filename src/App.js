import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [msgResponse, setMessage] = useState("No Yet Clicked");
  const [initResult, setInitResult] = useState(0);

  useEffect(() => {
    fetch('/').then(res => res.json()).then(data => {
      const { result } = data;
      console.log(result)
      setInitResult(result);
    }, []);
  });

  const onClickEvent = () => {
    fetch('/data').then(res => res.json()).then(data => {
      const { result } = data;
      setMessage(result);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>[TODO] - Results from the server will be displayed here</div>
        
        <button className="button" onClick={onClickEvent}>Submit</button>
        <p>Button clicked sumbit response: {msgResponse}</p>
      </header>
    </div>
  );
}

export default App;
