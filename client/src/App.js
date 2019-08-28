import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ClientLogin from "./components/client/ClientLogin";
import TrainerLogin from "./components/trainer/TrainerLogin";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Anywhere Fitness</p>
      </header>
      <Switch>
        <div>
          <div className="Options">
            <Route path="/ClientLogin" component={ClientLogin}>
              <button>Client Log In</button>
            </Route>
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
        </div>
      </Switch>
    </div>
  );
}

export default App;
