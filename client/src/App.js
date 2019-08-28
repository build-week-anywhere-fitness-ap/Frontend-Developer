import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ClientLogin from "./components/client/ClientLogin";
import TrainerLogin from "./components/trainer/TrainerLogin";
import SignUp from "./components/SignUp";
import PrivateRoute from './utils/PrivateRoute';

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
    </div>
  );
}

export default App;
