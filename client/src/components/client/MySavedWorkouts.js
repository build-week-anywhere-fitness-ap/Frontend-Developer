import React from "react";
import { Link } from "react-router-dom";

const MySavedWorkouts = props => {
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

    <div className="navbar">
      <h1>My Saved Workouts:</h1>
      <div className="workoutcard-flex">
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

export default MySavedWorkouts;
