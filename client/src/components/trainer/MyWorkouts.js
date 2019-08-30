import React from "react";
import { Link } from "react-router-dom";


const MyWorkouts = props => {
  return (
    <div className="saved-workouts">
      <h3>Saved Movies:</h3>
      {props.workouts.map(workout => (
        <span className="saved-workout">{workout.title}</span>
      ))}
      <div className="home-button">
        <Link to="/ClientApp" component="ClientApp">
          Home
        </Link>
      </div>

import TrainerApp from "./TrainerApp";

const MyWorkouts = props => {
  return (
    <div className="navbar">
      <h1>My Workouts</h1>
      {/* <div className="saved-workouts">
        {props.workout.map(workout => (
          <span className="saved-workout">{workout.title}</span>
        ))}
      </div>  */}
      <div className="workoutcard-flex">
        <div className="workout-card">
          <h2>WeightLifting</h2>
          <p>Instructor: Arnold Schwezenegar</p>
          <p>Type of Workout: Weight Training</p>
          <p>Difficulty: Difficult</p>
          <p>Location & Time</p>
        </div>
        <div className="workout-card">
          <h2>Yoga</h2>
          <p>Instructor: Michelle Obama</p>
          <p>Type of Workout: Hot Yoga</p>
          <p>Difficulty: Beginner</p>
          <p>Location & Time</p>
        </div>
        <div className="workout-card">
          <h2>Running</h2>
          <p>Instructor: Forest Gump</p>
          <p>Type of Workout: Long Distance Running</p>
          <p>Difficulty: Difficult</p>
          <p>Location & Time</p>
        </div>
      </div>
      <Link to="/TrainerApp">
        <button>Home</button>
      </Link>

    </div>
  );
};

export default MyWorkouts;
