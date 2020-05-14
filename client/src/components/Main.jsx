import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LogIn from './LogIn';
import Register from './Register';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails';
import ReviewList from './ReviewList';
import NewReview from './NewReview';
import { getAllMovies, getAllReviews, postReview, destroyReview } from '../services/api-helper';

export default class Main extends Component {

  state = {
    movies: [],
    reviews: []
  }
  
  componentDidMount() {
    this.readAllMovies();
  }
  
  readAllMovies = async () => {
    const movies = await getAllMovies();
    this.setState({ movies });
  }
  
  readAllReviews = async () => {
    const reviews = await getAllReviews();
    this.setState({ reviews });
  }

  handleReviewSubmit = async (reviewData) => {
    const newReview = await postReview(reviewData);
    this.setState(prevState => ({
      reviews: [...prevState.reviews, newReview]
    }));
  }
  
  handleReviewDelete = async (id) => {
    await destroyReview(id);
    this.setState(prevState => ({
      reviews: prevState.reviews.filter(review => {
        return review.id !== id
      })
    }))
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
        <Route path="/:id" render={(props) => (
          <MovieDetails
            {...props}
            movieId={props.match.params.id}
          />
        )} />
        <Route path="/:id/reviews" render={(props) => (
            <ReviewList
              {...props}
              handleReviewDelete={this.handleReviewDelete}
              reviews={this.state.reviews}
            />
        )} />
        <Route path="/:id/reviews/new" render={(props) => (
            <NewReview
              {...props}
                handleReviewSubmit={this.handleReviewSubmit}
                 movieId = {props.match.params.id}
            />
            )} />
      </main>
    )
  }
}

