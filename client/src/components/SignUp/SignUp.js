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
    <div className="login-header">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        <input
          className="form-style"
          type="text"
          name="name"
          placeholder="name"
          value={userInfo.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email" />
        <input
          className="form-style"
          type="email"
          name="email"
          placeholder="email"
          value={userInfo.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="role" />
        <h2>Trainer:</h2>
        <input
          className="check"
          name="role"
          type="checkbox"
          value={userInfo.role}
          onChange={handleChange}
        />
        <h2>Client:</h2>
        <input
          className="check"
          type="checkbox"
          value={userInfo.role}
          onChange={handleChange}
        />
      </form>
      <button type="submit">Submit</button>
    </div>
  );
};

export default SignUp;
