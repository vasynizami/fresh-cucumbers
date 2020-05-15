import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LogIn from './LogIn';
import Register from './Register';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
// import ReviewEdit from './ReviewEdit';
// import NewReview from './NewReview';
import { getAllMovies } from '../services/api-helper';

export default class Main extends Component {

  state = {
    movies: [],
    // reviews: []
  }
  
  componentDidMount() {
    this.readAllMovies();
    // this.readAllReviews();
  }
  
  readAllMovies = async () => {
    const movies = await getAllMovies();
    this.setState({ movies });
  }


  render() {
    return (
      <main>
        <Route exact path="/login" render={(props) => (
          <LogIn
            {...props}
            handleLogin={this.props.handleLogin} />
        )} />
        <Route exact path="/register" render={(props) => (
          <Register
            {...props}
            handleRegister={this.props.handleRegister} />
        )} />
        <Route exact path="/" render={() => (
          <MovieList
           movies={this.state.movies}/>
        )} />
        <Route path="/movies/:id" render={(props) => (
          <MovieDetails
          currentUser={this.props.currentUser}
            {...props}
            movieId={props.match.params.id}
            reviws={this.state.reviews}
          />
        )} />
      </main>
    )
  }
}

