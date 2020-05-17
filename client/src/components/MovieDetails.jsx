import React, { Component } from "react";
import { Route } from "react-router-dom";
import MoviePage from "./MoviePage";
import ReviewEdit from "./ReviewEdit";
import NewReview from "./NewReview";
import {
  getOneMovie,
  getAllReviews,
  postReview,
  editReview,
  destroyReview,
} from "../services/api-helper";

export default class MovieDetails extends Component {
  state = {
    movie: null,
    reviews: [],
  };

  componentDidMount() {
    this.setMovie();
    this.readAllReviews();
  }

  setMovie = async () => {
    const movie = await getOneMovie(this.props.movieId);
    this.setState({ movie });
  };

  readAllReviews = async () => {
    const reviews = await getAllReviews(this.props.movieId);
    this.setState({ reviews });
  };

  handleReviewSubmit = async (reviewData) => {
    const newReview = await postReview(this.props.movieId, reviewData);
    this.setState((prevState) => ({
      reviews: [...prevState.reviews, newReview],
    }));
  };

  handleReviewEdit = async (id, reviewData) => {
    const updatedReview = await editReview(this.state.movie.id, id, reviewData);
    this.setState((prevState) => ({
      reviews: prevState.reviews.map((review) => {
        return review.id === parseInt(id) ? updatedReview : review;
      }),
    }));
  };

  handleReviewDelete = async (id) => {
    await destroyReview(this.state.movie.id, id);
    this.setState((prevState) => ({
      reviews: prevState.reviews.filter((review) => {
        return review.id !== id;
      }),
    }));
  };

  render() {
    const { movie, reviews } = this.state;
    return (
      <>
        {
          // we need guard operator here cos render will try to happen before movie is setStated; the initial state runs first, then render, then lifecycles
          movie && (
            <Route
              path="/movies/:id/moviepage"
              render={(props) => (
                <MoviePage
                  {...props}
                  movie={movie}
                  reviews={reviews}
                  currentUser={this.props.currentUser}
                  handleReviewDelete={this.handleReviewDelete}
                />
              )}
            />
          )
        }
        <Route
          path="/movies/:id/reviews/:review_id/edit"
          render={(props) => {
            const id = props.match.params.review_id;
            const movieId = props.match.params.id;
            return (
              <ReviewEdit
                {...props}
                handleReviewEdit={this.handleReviewEdit}
                reviewId={id}
                movieId={movieId}
              />
            );
          }}
        />
        {this.props.currentUser && (
          <Route
            path="/movies/:id/reviews/new"
            render={(props) => (
              <NewReview
                {...props}
                handleReviewSubmit={this.handleReviewSubmit}
                movieId={props.match.params.id}
              />
            )}
          />
        )}
      </>
    );
  }
}
