import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
// import ReviewList from './ReviewList';
// import NewReview from './NewReview';
import { getOneMovie } from '../services/api-helper';

export default class MovieDetails extends Component {
  state = {
    movie: null
  }

  componentDidMount() {
    this.setMovie();
    // this.readAllReviews();
  }

  setMovie = async () => {
    const movie = await getOneMovie(this.props.movieId);
    this.setState({ movie });
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
    const { movie } = this.state;
    return (
      <>
        {
          // we need guard operator here cos render will try to happen before movie is set
          movie &&
          <>
          <div className="movieDetails">
          <img src={movie.img} />
          <p>{movie.name}</p>
          <p>{movie.director}</p>
          <p>{movie.genre}</p>
          <p>{movie.synopsis}</p>
          <p>{movie.release_year}</p>
          <p>{movie.country}</p>
          <p>{movie.runtime}</p>
          <Link to={`/${movie.id}/reviews/new`}>
            write a review
          </Link>
            </div>
            
          {/* <Route exact path="/:id/reviews/new" render={(props) => (
            <NewReview
              {...props}
                handleReviewSubmit={this.handleReviewSubmit}
                 movieId = {props.match.params.id}
            />
            )} /> */}
            </>
  }
      </>
    )
  }
}
