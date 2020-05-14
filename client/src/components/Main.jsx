import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LogIn from './LogIn';
import Register from './Register';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import { getAllMovies } from '../services/api-helper';

export default class Main extends Component {

  state = {
    movies: []
  }
  
  componentDidMount() {
    this.readAllMovies();
  }
  
  readAllMovies = async () => {
    const movies = await getAllMovies();
    this.setState({ movies });
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
        <Route exact path="/" render={() => (
          <MovieList
           movies={this.state.movies}/>
        )} />
        <Route exact path="/movies/:id" render={(props) => (
          <MovieDetails
            {...props}
              movieId={props.match.params.id}
          />
        )} />
      </main>
    )
  }
}

