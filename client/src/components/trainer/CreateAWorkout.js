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
      role: "",
      difficult: "",
      intermediate: "",
      beginner: "",
      description: ""
    });
  };
  return (
    <div className="login-header">
      <h1>Create A Workout</h1>
      <form className="form-flex" onSubmit={handleSubmit}>
        <label htmlFor="name" />
        Name:
        <input
          className="form-style"
          type="text"
          name="name"
          placeholder="name"
          value={trainerInfo.name}
          onChange={handleChange}
        />
        <label htmlFor="email" />
        Email:
        <input
          className="form-style"
          type="email"
          name="email"
          placeholder="email"
          value={trainerInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="trainer-role" />
        Trainer Role:
        <input
          className="form-style"
          type="text"
          name="role"
          value={trainerInfo.role}
          placeholder="trainer role"
          onChange={handleChange}
        />
        <label htmlFor="difficulty" />
        Difficult:
        <input
          className="check"
          name="Difficult"
          type="checkbox"
          value={trainerInfo.difficulty}
          onChange={handleChange}
        />
        Intermediate:
        <input
          className="check"
          name="Intermediate"
          type="checkbox"
          value={trainerInfo.difficulty}
          onChange={handleChange}
        />
        Beginner:
        <input
          className="check"
          name="Beginner"
          type="checkbox"
          value={trainerInfo.difficulty}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Type your description here"
          value={trainerInfo.description}
          onChange={handleChange}
        ></textarea>
      </form>
      <button type="submit">Add Workout</button>
    </div>
  );
};

export default CreateAWorkout;
