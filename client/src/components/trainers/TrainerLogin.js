import React from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

class TrainerLogin extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
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
      .post('https://bw-anywhere-fitness.herokuapp.com/api/register/', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/TrainerApp');
      })
      .catch(err => console.log(err.response));
  };

  // if we were to make this into redux, it would be called as this.props.login
  // rathen than this.login

  render() {
    return (
      <div>
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
          <button>Log in</button>
        </form>
      </div>
    );
  }
}

export default TrainerLogin;
