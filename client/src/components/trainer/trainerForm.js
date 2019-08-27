import React, { useState } from "react";

const TrainerForm = props => {
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
        <textarea
          name="body"
          placeholder="Type your note here"
          value={trainerInfo.body}
          onChange={handleChange}
        >
          hey
        </textarea>
      </form>
      <button type="submit">Edit</button>
    </div>
  );
};

export default Form;
