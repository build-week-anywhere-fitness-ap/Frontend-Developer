//nav for client to go to saved workouts and a nav link to go to trainer workout list
import React from "react";
import { NavLink } from "react-router-dom";
import MySavedWorkouts from "./MySavedWorkouts";
import AvailableWorkouts from "./AvailableWorkouts";

const ClientApp = () => {
  return (
    <div>
      <NavLink to="/MySavedWorkouts" component={MySavedWorkouts}>
        My Saved Workouts
      </NavLink>
      <NavLink to="/AvailableWorkouts" component={AvailableWorkouts}>
        Available Workouts
      </NavLink>
    </div>
  );
};

export default ClientApp;
