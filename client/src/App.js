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


import CreateAWorkout from "./components/trainer/CreateAWorkout";
import MyWorkouts from "./components/trainer/MyWorkouts";
import AvailableWorkouts from "./components/client/AvailableWorkouts";
import MySavedWorkouts from "./components/client/MySavedWorkouts";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Anywhere Fitness</p>
      </header>
      <Switch>
        <Route exact path="/" component={Homepage} />

        <Route path="/ClientLogin" component={ClientLogin} />
        <Route path="/TrainerLogin" component={TrainerLogin} />
        <Route path="/SignUp" component={SignUp} />
        <PrivateRoute exact path="/protected" component={ClientApp} />
        <PrivateRoute exact path="/protected" component={TrainerApp} />

        <Route exact path="/ClientLogin" component={ClientLogin} />
        <Route exact path="/TrainerLogin" component={TrainerLogin} />
        <Route path="/SignUp" component={SignUp} />
        <PrivateRoute exact path="/protected" component={ClientApp} />
        <PrivateRoute exact path="/protected" component={TrainerApp} />
        <Route exact path="/CreateAWorkout" component={CreateAWorkout} />
        <Route exact path="/MyWorkouts" component={MyWorkouts} />
        <Route exact path="/TrainerApp" component={TrainerApp} />
        <Route exact path="/AvailableWorkouts" component={AvailableWorkouts} />
        <Route exact path="/ClientApp" component={ClientApp} />
        <Route exact path="/MySavedWorkouts" component={MySavedWorkouts} />

      </Switch>
    </div>
  );
 }
export default App;
