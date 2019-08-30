import React from "react";
import { Link } from "react-router-dom";

const AvailableWorkouts = props => {
  return (
    <div className="navbar">
      <h1>Available Workouts</h1>
      <div className="workoutcard-flex">
        <div className="workout-card">
          <h2>Spin Class</h2>
          <p>Instructor: PeeWee Herman</p>
          <p>Type of Workout: Cycling</p>
          <p>Difficulty: Beginner</p>
          <p>Location & Time</p>
        </div>
        <div className="workout-card">
          <h2>WeightLifting</h2>
          <p>Instructor: Arnold Schwezenegar</p>
          <p>Type of Workout: Weight Training</p>
          <p>Difficulty: Difficult</p>
          <p>Location & Time</p>
        </div>
        <div className="workout-card">
          <h2>Crossfit</h2>
          <p>Instructor: Bill and Ted</p>
          <p>Type of Workout: Crossfit</p>
          <p>Difficulty: Intermediate</p>
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
      <Link to="/ClientApp">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default AvailableWorkouts;
