import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LogIn from './LogIn';
import Register from './Register';

export default class Main extends Component {

  state = {
    movies: [],
    reviews: []
  }

  render() {
    return (
      <main>
        <Route path="/login" render={(props) => (
          <LogIn
            {...props}
            handleLogin={this.props.handleLogin} />
        )} />
        <Route path="/register" render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister} />
        )} />
      </main>
    )
  }
}

