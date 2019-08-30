import React from "react";

import { NavLink } from "react-router-dom";
import MyWorkouts from "../trainer/MyWorkouts";
import AvailableWorkouts from "../client/AvailableWorkouts";

import { Link } from "react-router-dom";


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

        <h1>Start Your Workout Here:</h1>
        <li>
          <Link to="/MyWorkouts">My Workouts</Link>
        </li>
        <li>
          <Link to="/CreateAWorkout">Create A Workout</Link>
        </li>
        <li>
          <Link to="/AvailableWorkouts">Available Workouts</Link>

        </li>
      </ul>
    </div>
  );
};

export default TrainerApp;
