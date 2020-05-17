import React, { Component } from 'react';

export default class Register extends Component {
  state = {
    username: "",
    email:"",
    password:""
  }
 
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }
    
  render() {
    const { username, email, password } = this.state
    return (
      <form className="auth" onSubmit={(e) => {
        e.preventDefault();
        this.props.handleRegister(this.state);
        //this will redirect user to homepage after registering; we are able to do this cos we added inherent route {..props} in the parent component for Register
        this.props.history.push('/');
      }}>
        <h3>Sign Up</h3>
        <div className="input-field">
        <label htmlFor="username">username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
          />
        </div>
        <div className="input-field">
        <label htmlFor="password">password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          />
          </div>
        <button className="submit">Submit</button>
      </form>
    )
  }
}
