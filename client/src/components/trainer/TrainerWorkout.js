import React, { useState, useEffect } from "react";
import axios from "axios";

const TrainerWorkout = props => {
  const [workout, setWorkout] = useState();

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

  const { title, instructor, description } = workout;
  return (
    <div className="save-wrapper">
      <div className="workout-card">
        <h2>{title}</h2>
        <div className="workout-instructor">
          Director: <em>{instructor}</em>
        </div>
        <div className="workout-difficult">
          Difficulty: <strong>{difficulty}</strong>
        </div>
        <div>
          <h3>Description</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TrainerWorkout;
