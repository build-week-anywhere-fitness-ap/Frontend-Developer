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
    </div>
  );
};

export default MySavedWorkouts;
