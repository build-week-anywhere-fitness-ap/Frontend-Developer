import React from "react";
import { Link } from "react-router-dom";

const MySavedWorkouts = props => {
  return (
    <div className="navbar">
      <h1>My Saved Workouts:</h1>

      <Link to="/ClientApp">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default MySavedWorkouts;
