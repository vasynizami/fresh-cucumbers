import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LogIn from './LogIn';
import Register from './Register';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
// import ReviewList from './ReviewList';
import NewReview from './NewReview';
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
  
  // readAllReviews = async () => {
  //   const reviews = await getAllReviews();
  //   this.setState({ reviews });
  // }

  // handleReviewSubmit = async (reviewData) => {
  //   const newReview = await postReview(reviewData);
  //   this.setState(prevState => ({
  //     reviews: [...prevState.reviews, newReview]
  //   }));
  // }
  
  // handleReviewDelete = async (id) => {
  //   await destroyReview(id);
  //   this.setState(prevState => ({
  //     reviews: prevState.reviews.filter(review => {
  //       return review.id !== id
  //     })
  //   }))
  // }

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
        <Route path="/:id" render={(props) => (
          <MovieDetails
          currentUser={this.props.currentUser}
            {...props}
            movieId={props.match.params.id}
          />
        )} />
        
        
      </main>
    )
  }
}

