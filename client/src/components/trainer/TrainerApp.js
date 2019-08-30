// nav for trainer to go to your workouts and create a workout
import React from "react";
import { NavLink } from "react-router-dom";
import MyWorkouts from "../trainer/MyWorkouts";
import AvailableWorkouts from "../client/AvailableWorkouts";

const TrainerApp = () => {
  return (
    <div>
      <ul className="navbar">
        <h1>Start Here:</h1>
        <li>
          <NavLink exact to="/MyWorkouts" component={MyWorkouts}>
            My Workouts
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/AvailableWorkouts" component={AvailableWorkouts}>
            Available Workouts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default TrainerApp;
