import React from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import TrainerApp from "./TrainerApp";
import { Route, Link } from "react-router-dom";

class TrainerLogin extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  // NOTE: double check history.push, could be "/" or "/TrainerApp.js"
  // NOTE: We have a register and a login endpoin. How/where do i use both?

  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://bw-anywhere-fitness.herokuapp.com/api/register/",
        this.state.credentials
      )
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/TrainerApp");
      })
      .catch(err => console.log(err.response));
  };

  // if we were to make this into redux, it would be called as this.props.login
  // rathen than this.login

  render() {
    return (
      <div className="login-header">
        <h1>Trainer Login</h1>
        <Route path="/TrainerApp" component={TrainerApp}></Route>
        <form className="form-flex" onSubmit={this.login}>
          <input
            className="form-style"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input

            className="form-style"

            className="form-styles"

            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />

          <Link to="/TrainertApp">

          <Link to="/TrainerApp">

            <button type="submit">Enter</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default TrainerLogin;
