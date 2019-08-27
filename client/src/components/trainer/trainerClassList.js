import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TrainerClassList = props => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const getClasses = () => {
      axios
        .get("")
        .then(response => {
          setClasses();
        })
        .catch(error => {
          console.error("Server Error", error);
        });
    };

    getClasses();
  }, []);

  return (
    <div className="classes-list">
      {classes.map(class => (
        <ClassDetails key={class.id} class={class} />
      ))}
    </div>
  );
};

function ClassDetails({ class }) {
  const { title, instructor, description } = class;
  return (
    <div className="classes-card">
      <h2>{title}</h2>
      <Link to={`/trainerClassList/${id}`} />
      <div className="class-instructor">
       Instructor: <em>{Instructor}</em>
      </div>
      <div className="class-difficulty">
        Difficulty: <strong>{Difficulty}</strong>
      </div>
      <h3>Actors</h3>

      {classes.map(class => (
        <div key={class} className="trainer-class">
          {class}
        </div>
      ))}
    </div>
  );
}

export default TrainerClassList;
