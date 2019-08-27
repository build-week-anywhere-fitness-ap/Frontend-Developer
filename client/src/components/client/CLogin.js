import React from "react";
import React, { useState } from "react";

const CLogin = props => {
  const [clInfo, setclInfo] = useState({
    email: "",
    password:""
  });
  const handleChange = event => {
    setUserInfo({ ...clInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(handleSubmit);
    let newForm = {
      ...clInfo,
      id: Date.now()
    };
    props.addNewForm(newForm);
    setclInfo({ email: "", password: "" });
  };
  return (
    <div className="user-list">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" />
        Name:
        <input
          type="email"
          name="email"
          placeholder="email"
          value={clInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="password" />
        Email:
        <input
          type="password"
          placeholder="password"
          value={clInfo.password}
          onChange={handleChange}
        />
      </form>
      <button type="submit">Enter</button>
    </div>
  );
};

export default CLogin;