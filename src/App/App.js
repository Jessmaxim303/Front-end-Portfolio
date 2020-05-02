import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from '../About/About.js';
import { Main } from '../Main/Main.js';
import { CodeWork } from '../CodeWork/CodeWork.js';

function App() {
  return (
  	<Router>
      <div className="App">
        <Switch>
        <Route exact path='/' render={() => <Main/> } /> 
        <Route exact path='/code' render={() => <CodeWork/> } /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
