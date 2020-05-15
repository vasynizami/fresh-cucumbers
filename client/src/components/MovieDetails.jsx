import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ReviewList from "./ReviewList";
import ReviewEdit from "./ReviewEdit";
import NewReview from './NewReview';
import { getOneMovie, getAllReviews, postReview, editReview, destroyReview } from "../services/api-helper";

export default class MovieDetails extends Component {
  state = {
    movie: null,
    reviews: []
  }

  componentDidMount() {
    this.setMovie();
    this.readAllReviews();
  }

  setMovie = async () => {
    const movie = await getOneMovie(this.props.movieId);
    this.setState({ movie });
  }

  readAllReviews = async () => {
    const reviews = await getAllReviews(this.props.movieId);
    this.setState({ reviews });
  }

  handleReviewSubmit = async (reviewData) => {
    const newReview = await postReview(this.props.movieId, reviewData);
    this.setState(prevState => ({
      reviews: [...prevState.reviews, newReview]
    }));
  }

  handleReviewEdit = async (id, reviewData) => {
    const updatedReview = await editReview(this.state.movie.id, id, reviewData);
    this.setState(prevState => ({
      reviews: prevState.reviews.map(review => {
        return review.id === id ? updatedReview : review
      })
    }));
  }

  handleReviewDelete = async (id) => {
    await destroyReview(this.state.movie.id, id);
    this.setState(prevState => ({
      reviews: prevState.reviews.filter(review => {
        return review.id !== id
      })
    }));
  }

  render() {
    const { movie, reviews } = this.state;
    return (
      <>
        {
          // we need guard operator here cos render will try to happen before movie is set
          movie && (
            <div className="movieContent">
              <div className="movieDetails">
                <img src={movie.img} />
                <p>{movie.name}</p>
                <p>{movie.director}</p>
                <p>{movie.genre}</p>
                <p>{movie.synopsis}</p>
                <p>{movie.release_year}</p>
                <p>{movie.country}</p>
                <p>{movie.runtime}</p>
                {
                  this.props.currentUser
                  &&
                  <Link to={`/movies/${movie.id}/reviews/new`}>write a review</Link>
                }
              </div>
              <ReviewList
                currentUser={this.props.currentUser} 
                handleReviewDelete={this.handleReviewDelete}
                reviews={reviews}
                movieId={movie.id}
              />
            </div>
    )
        }
      
        <Route path='/movies/:id/reviews/:review_id/edit' render={(props) => {
          const id = props.match.params.review_id
          const movieId = props.match.params.id
          return <ReviewEdit
            {...props}
            handleReviewEdit={this.handleReviewEdit}
            reviewId={id}
            movieId={movieId}
          />
        }} /> 
       {
          this.props.currentUser
          &&
          <Route exact path="/movies/:id/reviews/new" render={(props) => (
            <NewReview
              {...props}
              handleReviewSubmit={this.handleReviewSubmit}
              movieId={props.match.params.id}
            />
          )} />
        }
      </>
    );
  }
}
