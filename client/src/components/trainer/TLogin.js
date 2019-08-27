import React from "react";
import React, { useState } from "react";

const TLogin = props => {
  const [tlInfo, settlInfo] = useState({
    email: "",
    password: ""
  });
  const handleChange = event => {
    settlInfo({ ...tlInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    event.preventDefault();
    console.log(handleSubmit);
    let newForm = {
      ...tlInfo,
      id: Date.now()
    };
    props.addNewForm(newForm);
    settlInfo({ email: "", password: "" });
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
          value={tlInfo.email}
          onChange={handleChange}
        />
        <label htmlFor="password" />
        Email:
        <input
          type="password"
          placeholder="password"
          value={tlInfo.password}
          onChange={handleChange}
        />
      </form>
      <button type="submit">Enter</button>
    </div>
  );
};

export default TLogin;
