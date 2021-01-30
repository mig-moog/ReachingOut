import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home'
import About from "./About"
import Contacts from './Contacts';
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contacts'>Contacts</Link>
            </li>
          </ul>
        </nav>
    <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/contacts">
          <Contacts></Contacts>
        </Route>
    </Switch>
      </div>
    </Router>
  );
}

export default App;
