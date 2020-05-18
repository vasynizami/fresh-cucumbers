import React, { Component } from "react";
// import { Link } from 'react-router-dom';

export default class LogIn extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    return (
      <form
        className="auth"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleLogin(this.state);
          //this will redirect user to homepage after signing un
          this.props.history.push("/");
        }}
      >
        <h4>Sign In</h4>
        
        <div className="input-field">
          <label htmlFor="username">username:</label>
          <input
            required
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </div>

        <div className="input-field">
          <label className="email-label" htmlFor="email">email:</label>
          <input
            required
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </div>

        <div className="input-field">
        <label htmlFor="password">password:</label>
        <input
          required
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          />
        </div>
        <button className="submit">Submit</button>
      </form>
    );
  }
}
