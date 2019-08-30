import React from "react";
import { Link } from "react-router-dom";

const AvailableWorkouts = props => {
  return (
    <div>
      <h1>Available Workouts</h1>

      <Link to="/ClientApp">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default AvailableWorkouts;
