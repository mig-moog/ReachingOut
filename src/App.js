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
import NavBar from "./NavBar";
import Footer from "./Footer";
import Partners from "./partners"
function App() {
  return (
    <Router>
      <div>
        <NavBar />
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
          <Route path='/partners'>
            <Partners />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
