import React from 'react';
import './App.css';
import Home from './Home'
import Footer from './Footer'
import { Covid } from './Banner'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*
  App component renders whole app with router.
  You can see the Covid component which is a navbar about covid info
  You can see the Home component which contains all main components
  and the Footer that tells info about me
*/
function App() {
  return (
    <div className="app">
      <Router>
        <Covid /> 
        
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        <Footer />
      </ Router>
    </div>
  );
}

export default App;
