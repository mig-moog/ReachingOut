import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from './Home'
import About from "./About"
import Contacts from './Contacts';

import NavBar from "./NavBar"

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
    <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
    </Switch>
      </div>
    </Router>
  );
}

export default App;
