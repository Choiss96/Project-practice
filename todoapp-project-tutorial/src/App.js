import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
// import React from 'react';
// import { redirect } from 'react-router-dom';

const ChangeButton = styled.button`
  width: 10vw;
  height: 3vh;
  color: black;
  background-color: white;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* justify-items: auto; */
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ChangeButton> Learn React </ChangeButton>
        </a>
      </header>
    </div>
  );
}

export default App;
