import React from 'react';
import './App.css';
import { Header } from '../Header/Header.js';
import { About } from '../About/About.js';
import { Projects } from '../Projects/Projects.js';
import { WelcomeContainer } from '../WelcomeContainer/WelcomeContainer.js';
import { Services } from '../Services/Services.js';
import { Blog } from '../Blog/Blog.js';
import { Connect } from '../Connect/Connect.js';

function App() {
  return (
    <div className="App">
      <WelcomeContainer/>
      <Projects/>
      <About/>
      <Services/>
      <Blog/>
      <Connect/>
    </div>
  );
}

export default App;
