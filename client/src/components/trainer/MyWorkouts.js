import React from "react";
import { Link } from "react-router-dom";

const MyWorkouts = props => {
  return (
    <div className="saved-workouts">
      <h3>Saved Workouts:</h3>
      {props.workouts.map(workout => (
        <span className="saved-workout">{workout.title}</span>
      ))}
      <div className="home-button">
        <Link to="/TrainerApp">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default MyWorkouts;
