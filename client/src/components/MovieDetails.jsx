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
    const updatedReview = await editReview(id, reviewData);
    this.setState(prevState => ({
      reviews: prevState.reviews.map(review => {
        return review.id === id ? updatedReview : review
      })
    }));
  }

  handleReviewDelete = async (id) => {
    await destroyReview(id);
    this.setState(prevState => ({
      reviews: prevState.reviews.filter(review => {
        return review.id !== id
      })
    }));
  }

  render() {
    const { movie } = this.state;
    return (
      <>
        {
          // we need guard operator here cos render will try to happen before movie is set
          movie && (
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
                {
                  this.props.currentUser
                  &&
                  <Link to={`/${movie.id}/new`}>write a review</Link>
                }
              </div>
            </>
          )
        }
        <Route
         path="/:id/reviews"
          render={(props) => (
            <ReviewList
              {...props}
              currentUser={this.props.currentUser}
              handleReviewEdit={this.handleReviewEdit}
              handleReviewDelete={this.handleReviewDelete}
              reviews={this.state.reviews}
            />
          )}
        />
        <Route path='/:id/reviews/:review_id/edit' render={(props) => {
          const id  = props.match.params.review_id
          return <ReviewEdit
            {...props}
            handleReviewEdit={this.handleReviewEdit}
            reviewId={id}
          />
        }} />
        {
          this.props.currentUser
          &&
          <Route exact path="/:id/reviews/new" render={(props) => (
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
