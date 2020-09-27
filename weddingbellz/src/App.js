import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Register from './Register';
import Login from './Login';
import Home from './Register';

function App() {
  return (
        <div>
                <Router>

                    <Route to="/home" exact strict component={Home} />
                  </Router>
          </div>

  )
}

export default App;
