import React, { useState, useEffect } from "react";
import axios from "axios";

const TrainerClass = props => {
  const [class, setClass] = useState();

  useEffect(() => {
    const id = props.match.params.id;
    axios
      .get(``)
      .then(response => {
        setClass();
      })
      .catch(error => {
        console.error(error);
      });
  }, [props.match.params.id]);

  if (!class) {
    return <div>Loading class information...</div>;
  }

  const { title, instructor, description } = class;
  return (
    <div className="save-wrapper">
      <div className="class-card">
        <h2>{title}</h2>
        <div className="class-instructor">
          Director: <em>{instructor}</em>
        </div>
        <div className="class-difficult">
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

export default TrainerClass;
