//nav for client to go to saved workouts and a nav link to go to trainer workout list
import React from "react";
import { NavLink, Route } from "react-router-dom";
import MySavedWorkouts from "./MySavedWorkouts";
import AvailableWorkouts from "./AvailableWorkouts";

const ClientApp = () => {
  return (
    <div className="navbar">
      <h1>Start Your Workout Here:</h1>
      <ul>
        <li>
          <NavLink to="/MySavedWorkouts" activeClassName="activeNavButton">
            My Saved Workouts
          </NavLink>
        </li>
        <li>
          <NavLink to="/AvailableWorkouts" activeClassName="activeNavButton">
            Available Workouts
          </NavLink>
        </li>
      </ul>
      <Route exact path="MySavedWorkouts" component={MySavedWorkouts} />
      <Route exact path="AvailableWorkouts" component={AvailableWorkouts} />
    </div>
  );
};

export default ClientApp;
