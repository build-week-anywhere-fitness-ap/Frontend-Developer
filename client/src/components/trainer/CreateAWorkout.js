import React, { useState } from "react";

const CreateAWorkout = props => {
  const [trainerInfo, setTrainerInfo] = useState({
    name: "",
    email: "",
    role: "",
    difficulty: "",
    description: ""
  });
  const handleChange = event => {
    setTrainerInfo({ ...trainerInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(handleSubmit);
    let newForm = {
      ...trainerInfo,
      id: Date.now()
    };
    props.addNewForm(newForm);
    setTrainerInfo({
      name: "",
      email: "",
      trainerRole: "",
      difficulty: "",
      description: ""
    });
  };
  return (
    <div className="user-list">
      <h1></h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        Name:
        <input
          type="text"
          name="name"
          placeholder="name"
          value={trainerInfo.name}
          onChange={handleChange}
        />
        <label htmlFor="email" />
        Email:
        <input
          type="email"
          placeholder="email"
          value={trainerInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="trainer-role" />
        Trainer Role:
        <input
          type="text"
          placeholder="trainer role"
          value={trainerInfo.role}
          onChange={handleChange}
        />
        <label htmlFor="difficulty" />
        Difficulty:
        <input
          type="checkbox"
          placeholder="difficulty"
          value={trainerInfo.difficulty}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Type your description here"
          value={userInfo.description}
          onChange={handleChange}
        ></textarea>
      </form>
      <button type="submit">Add Workout</button>
    </div>
  );
};

export default CreateAWorkout;
