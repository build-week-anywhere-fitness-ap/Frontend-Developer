import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ClientLogin from "./components/client/ClientLogin";
import TrainerLogin from "./components/trainer/TrainerLogin";
import SignUp from "./components/SignUp/SignUp";
import PrivateRoute from "./utils/PrivateRoute";
import ClientApp from "./components/client/ClientApp";
import TrainerApp from "./components/trainer/TrainerApp";
import Homepage from "./components/Homepage";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Anywhere Fitness</p>
      </header>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/ClientLogin" component={ClientLogin} />
        <Route exact path="/TrainerLogin" component={TrainerLogin} />
        <Route exact path="/SignUp" component={SignUp} />
        <PrivateRoute exact path="/protected" component={ClientApp} />
        <PrivateRoute exact path="/protected" component={TrainerApp} />
      </Switch>
    </div>
  );
}

export default App;
