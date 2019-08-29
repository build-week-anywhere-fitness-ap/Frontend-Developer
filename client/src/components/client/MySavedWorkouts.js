import React from "react";
import { Route, Link } from "react-router-dom";
import ClientApp from "./ClientApp";

const MySavedWorkouts = props => {
  return (
    <div className="saved-workouts">
      <h3>Saved Workouts:</h3>
      {props.workouts.map(workout => (
        <span className="saved-workout">{workout.name}</span>
      ))}
      <div className="home-button">
        <Link to="/ClientApp">
          <button>Home</button>
        </Link>
        <Route path="/ClientApp" component={ClientApp} />
      </div>
    </div>
  );
};

export default MySavedWorkouts;
