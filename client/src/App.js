import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ClientLogin from "./components/client/ClientLogin";
import TrainerLogin from "./components/trainer/TrainerLogin";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoute from "./utils/PrivateRoute"
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ClientApp from'./components/client/ClientApp';
import TrainerApp from './components/trainer/TrainerApp'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Anywhere Fitness</p>
      </header>
      <Switch>
        <div className="Options">
          <button>
            <Route path="/ClientLogin" component={ClientLogin}>
              Client Log In
            </Route>
          </button>
        </div>
        <div>
          <button>
            <Route path="/TrainerLogin" component={TrainerLogin}>
              Trainer Log In
            </Route>
          </button>
        </div>
        <div>
          <button>
            <Route path="/SignUp" component={SignUp}>
              Sign Up
            </Route>
          </button>
        </div>
      </Switch>
    <PrivateRoute exact path="/protected" component={ClientLogin} />
    <PrivateRoute exact path="/protected" component={TrainerLogin} />


    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/ClientLogin">Client Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/ClientLogin" component={ClientLogin} />
        <PrivateRoute exact path="/protected" component={ClientApp} />
        <ul>
          <li>
            <Link to="/TrainerLogin">Trainer Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/TrainerLogin" component={TrainerLogin} />
        <PrivateRoute exact path="/protected" component={TrainerApp} />
      </div>
    </Router>


    </div>
  );
}

export default App;
