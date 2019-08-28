import React from "react";
import axiosWithAuth from '../../utils/axiosWithAuth';
import TrainerApp from "./TrainerApp";
import { Route } from "react-router-dom";

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
  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/login", this.state.credentials)
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
      <div className="user-list">
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button type="submit">
            <Route path="/TrainerApp" component={TrainerApp}></Route>
          </button>
        </form>
      </div>
    );
  }
}

export default TrainerLogin;

// import React from "react";
// import React, { useState } from "react";

// const TrainerLogin = props => {
//   const [tlInfo, settlInfo] = useState({
//     email: "",
//     password: ""
//   });
//   const handleChange = event => {
//     settlInfo({ ...tlInfo, [event.target.name]: event.target.value });
//   };
//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(handleSubmit);
//     let newForm = {
//       ...tlInfo,
//       id: Date.now()
//     };
//     props.addNewForm(newForm);
//     settlInfo({ email: "", password: "" });
//   };
//   return (
//     <div className="user-list">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="email" />
//         Name:
//         <input
//           type="email"
//           name="email"
//           placeholder="email"
//           value={tlInfo.email}
//           onChange={handleChange}
//         />
//         <label htmlFor="password" />
//         Email:
//         <input
//           type="password"
//           placeholder="password"
//           value={tlInfo.password}
//           onChange={handleChange}
//         />
//       </form>
//       <button type="submit">
//         <Route path="/CreateAWorkout" component={CreateAWorkout}>
//           Enter
//         </Route>
//       </button>
//     </div>
//   );
// };

// export default TrainerLogin;
