import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TrainerWorkoutList = props => {
  const [workout, setWorkout] = useState([]);
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
        <ClassDetails key={workout} />
      ))}
    </div>
  );
};

function WorkoutDetails({ workout }) {
  const { title, instructor, difficulty, description } = workout;
  return (
    <div className="workout-card">
      <h2>{title}</h2>
      <Link to={`/TrainerWorkoutList/${workout}`} />
      <div className="workout-instructor">
       Instructor: <em>{instructor}</em>
      </div>
      <div className="workout-difficulty">
        Difficulty: <strong>{difficulty}</strong>
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
