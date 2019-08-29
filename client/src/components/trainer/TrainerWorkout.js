import React, { useState, useEffect } from "react";
import axios from "axios";

const TrainerWorkout = props => {
  const [workout, setWorkout] = useState("");

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(``)
      .then(response => {
        setWorkout();
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);

  if (!workout) {
    return <div>Loading workout information...</div>;
  }

  const {
    name,
    email,
    role,
    difficult,
    intermediate,
    beginner,
    description
  } = workout;
  return (
    <div className="save-wrapper">
      <div className="workout-card">
        Workout:
        <div className="workout-instructor">
          Instructor: <em>{workout.name}</em>
        </div>
        <div className="workout-difficult">
          <strong>{workout.difficult}</strong>
          <strong>{workout.intermediate}</strong>
          <strong>{workout.beginner}</strong>
        </div>
        <div>
          <h3>Description</h3>
          <p>{workout.description}</p>
        </div>
      </div>
      <div
        onClick={event => {
          event.preventDefault();
          props.addToSavedList(workout);
        }}
        className="save-button"
      >
        Save
      </div>
    </div>
  );
};

export default TrainerWorkout;
