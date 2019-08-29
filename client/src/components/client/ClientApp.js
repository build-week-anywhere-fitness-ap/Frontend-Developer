//nav for client to go to saved workouts and a nav link to go to trainer workout list
import React from "react";
import { Link, Route } from "react-router-dom";
import MySavedWorkouts from "./MySavedWorkouts";
import AvailableWorkouts from "./AvailableWorkouts";

const ClientApp = () => {
  return (
    <div className="navbar">
      <h1>Start Your Workout Here:</h1>
      <ul>
        <li>
          <Link to="/MySavedWorkouts">My Saved Workouts</Link>
        </li>
        <li>
          <Link to="/AvailableWorkouts">Available Workouts</Link>
        </li>
      </ul>
      <Route exact path="MySavedWorkouts" component={MySavedWorkouts} />
      <Route exact path="AvailableWorkouts" component={AvailableWorkouts} />
    </div>
  );
};

export default ClientApp;
