import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route to="/home" exact strict component={Home} />
          <Route to="/Register" exact strict component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
