import React from 'react';
import './App.css';
import { Header } from '../Header/Header.js';
import { About } from '../About/About.js';
import { Projects } from '../Projects/Projects.js';
import { WelcomeContainer } from '../WelcomeContainer/WelcomeContainer.js'

function App() {
  return (
    <div className="App">
      <WelcomeContainer/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
