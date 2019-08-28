import React, { useState } from "react";

const SignUp = props => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    role: ""
  });
  const handleChange = event => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(handleSubmit);
    let newForm = {
      ...userInfo,
      id: Date.now()
    };
    props.addNewForm(newForm);
    setUserInfo({ name: "", email: "", role: "" });
  };
  return (
    <div className="user-list">
      <h1>Create A Workout</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        Name:
        <input
          type="text"
          name="name"
          placeholder="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <label htmlFor="email" />
        Email:
        <input
          type="email"
          placeholder="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="role" />
        Role:
        <input
          type="checkbox"
          placeholder="role"
          value={userInfo.role}
          onChange={handleChange}
        />
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default SignUp;
