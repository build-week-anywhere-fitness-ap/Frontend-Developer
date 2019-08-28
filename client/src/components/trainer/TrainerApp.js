// nav for trainer to go to your workouts and create a workout
import React from "react";
import { NavLink } from "react-router-dom";
import MyWorkouts from "./MyWorkouts";
import AvailableWorkouts from "../client/AvailableWorkouts";

const TrainerApp = () => {
  return (
    <div>
      <NavLink to="/MyWorkouts" component={MyWorkouts}>
        My Workouts
      </NavLink>
      <NavLink to="/AvailableWorkouts" component={AvailableWorkouts}>
        Available Workouts
      </NavLink>
    </div>
  );
};

export default TrainerApp;
