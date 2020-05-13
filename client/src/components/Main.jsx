import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LogIn from './LogIn';
import Register from './Register';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import ReviewList from './ReviewList';

export default class Main extends Component {

  state = {
    movies: [],
    reviews: []
  }
  
  componentDidMount() {
    this.readAllMovies();
    this.readAllReviews();
  }
  
  readAllMovies = async () => {
    const movies = await getAllMovies();
    this.setState({ movies })
  }

  readAllReviews = async () => {
    const reviews = await getAllReviews();
    this.setState({ reviews })
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
        <Route path="/" render={(props) => (
          <MovieList
             />
        )} />
        <Route path="/:id" render={(props) => (
          <MovieDetails
             />
        )} />
        <Route path="/:id" render={(props) => (
          <ReviewList
             />
        )} />
      </main>
    )
  }
}

