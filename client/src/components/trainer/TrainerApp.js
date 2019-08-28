// nav for trainer to go to your workouts and create a workout
import React from "react";
import { NavLink } from "react-router-dom";
import MySavedWorkouts from "./MySavedWorkouts";
import AvailableWorkouts from "../client/AvailableWorkouts";

const TrainerApp = () => {
  return (
    <div>
      <NavLink to="/MySavedWorkouts" component={MySavedWorkouts}>
        My Workouts
      </NavLink>
      <NavLink to="/AvailableWorkouts" component={AvailableWorkouts}>
        Available Workouts
      </NavLink>
    </div>
  );
};

export default TrainerApp;
