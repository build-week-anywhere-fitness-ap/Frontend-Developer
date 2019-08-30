import React from "react";
import { Link } from "react-router-dom";
import TrainerApp from "./TrainerApp";

const MyWorkouts = props => {
  return (
    <div>
      <h1 className="navbar">My Workouts</h1>
      {/* <div className="saved-workouts">
        {props.workout.map(workout => (
          <span className="saved-workout">{workout.title}</span>
        ))}
      </div>  */}
      <Link to="/TrainerApp">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default MyWorkouts;
