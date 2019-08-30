import React, { useState } from "react";
import { signUpUser } from '../../actions/index'
import { connect } from 'react-redux'

const SignUp = props => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    client: false
  });
  const handleChange = event => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  const handleSubmit = event => {
    console.log("We are in handleSubmit")
    event.preventDefault();
    props.signUpUser(userInfo)
    // let newForm = {
    //   ...userInfo,
    //   id: Date.now()
    // };
    // props.addNewForm(newForm);
    setUserInfo({ 
      fistName: "", 
      lastName: "", 
      username: "", 
      password: "", 
      client: false, 
      });
  };
  
  return (
    <div className="login-header">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" />
        First Name:
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={userInfo.firstName}
          onChange={handleChange}
        />
        <label htmlFor="firstName" />
        Last Name:
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={userInfo.lastName}
          onChange={handleChange}
        />
        <label htmlFor="lastName" />
        userame:
        <input
          type="text"
          name="username"
          placeholder="username"
          value={userInfo.username}
          onChange={handleChange}
        />
        <label htmlFor="username" />
        Password:
        <input
          type="text"
          name="password"
          placeholder="password"
          value={userInfo.password}
          onChange={handleChange}
        />
        <label htmlFor="password" />

        <label htmlFor="role" />
        Client:
        <input type="checkbox" name="role" value="client" onChange={handleChange} />
        Trainer:
        <input type="checkbox" name="role" value={userInfo.role} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
      
      {/* <button className="button" onClick={()=>props.removeFeature(props.feature)}>X</button> */}
    </div>
  );
};

function mapsStatetoProps(state) {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    username: state.username,
    password: state.password,
    client: state.client
  }
} 

export default connect(mapsStatetoProps,{signUpUser}) (SignUp);
