import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import ClientLogin from "./components/client/ClientLogin";
import TrainerLogin from "./components/trainer/TrainerLogin";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Anywhere Fitness</p>
      </header>
      <div className="Options">
        <Link to="/ClientLogin">Client Log In</Link>
      </div>
      <div>
        <Link to="/TrainerLogin">Trainer Log In</Link>
      </div>
      <div>
        <Link path="/SignUp">Sign Up</Link>
      </div>
      <Switch>
        <Route exact path="/ClientLogin" component={ClientLogin} />
        <Route exact path="/TrainerLogin" component={TrainerLogin} />
        <Route exact path="/SignUp" component={SignUp} />
        <PrivateRoute exact path="/protected" component={ClientApp} />
        <PrivateRoute exact path="/protected" component={TrainerApp} />
      </Switch>
    </div>
  );
}

export default App;
