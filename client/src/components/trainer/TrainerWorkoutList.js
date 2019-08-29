import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const trainers = [
  {
    Name: "Tony",
    Email: "Tony@tony.tony",
    Role: "Cross Fit Trainer",
    Difficult: "true",
    Intermediate: "false",
    Begginer: "false",
    Description: "Let's Burn Some Calories"
  }
];

const TrainerWorkoutList = props => {
  const [workout, setWorkout] = useState([trainers]);
  useEffect(() => {
    const getWorkout = () => {
      axios
        .get("")
        .then(response => {
          setWorkout();
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getWorkout();
  }, []);
  return (
    <div className="workout-list">
      {workout.map(workout => (
        <WorkoutDetails key={workout} />
      ))}
    </div>
  );
};

function WorkoutDetails({ workout }) {
  const { name, difficult, intermediate, beginner, description } = workout;
  return (
    <div className="workout-card">
      <Link to={`/TrainerWorkoutList/${workout}`} />
      <div className="workout-instructor">
        Instructor: <em>{name}</em>
      </div>
      <div className="workout-difficulty">
        <strong>{difficult}</strong>
        <strong>{intermediate}</strong>
        <strong>{beginner}</strong>
      </div>
      <div>
        <h3>Description</h3>
        <p>{description}</p>
      </div>

      {workout.map(workout => (
        <div key={workout} className="trainer-workout">
          {workout}
        </div>
      ))}
    </div>
  );
}

export default TrainerWorkoutList;
