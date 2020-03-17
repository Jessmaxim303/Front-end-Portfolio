import React from 'react';
import './App.css';
import { Header } from '../Header/Header.js';
import { WelcomeContainer } from '../WelcomeContainer/WelcomeContainer.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <WelcomeContainer/>
    </div>
  );
}

export default App;
