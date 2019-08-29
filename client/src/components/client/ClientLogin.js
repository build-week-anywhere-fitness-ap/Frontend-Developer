import React from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import ClientApp from "./ClientApp";
import { Route, Link } from "react-router-dom";

class ClientLogin extends React.Component {
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

  // NOTE: double check history.push, could be "/" or "/ClientApp.js"
  login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://bw-anywhere-fitness.herokuapp.com/api/register/",
        this.state.credentials
      )
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/ClientApp");
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div className="login-header">
        <h1>Client Login</h1>
        <Route path="/ClientApp" component={ClientApp}></Route>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <Link to="/ClientApp">
            <button type="submit">Submit</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default ClientLogin;

// import React, { useState } from "react";

// const ClientLogin = props => {
//   const [clInfo, setclInfo] = useState({
//     email: "",
//     password: ""
//   });
//   const handleChange = event => {
//     setUserInfo({ ...clInfo, [event.target.name]: event.target.value });
//   };
//   const handleSubmit = event => {
//     event.preventDefault();
//     console.log(handleSubmit);
//     let newForm = {
//       ...clInfo,
//       id: Date.now()
//     };
//     props.addNewForm(newForm);
//     setclInfo({ email: "", password: "" });
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
//           value={clInfo.email}
//           onChange={handleChange}
//         />
//         <label htmlFor="password" />
//         Email:
//         <input
//           type="password"
//           placeholder="password"
//           value={clInfo.password}
//           onChange={handleChange}
//         />
//       </form>
//       <button type="submit">
//         <Route path="/TrainerClassList" component={TrainerClassList}>
//           >Enter
//         </Route>
//       </button>
//     </div>
//   );
// };

// export default ClientLogin;
