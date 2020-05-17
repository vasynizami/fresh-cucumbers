import React from "react";
import ReviewList from "./ReviewList";
import { Link } from 'react-router-dom';

function MoviePage(props) {
  const { currentUser, movie, handleReviewDelete, reviews } = props;
  return (
    <div className="movieContent">
      <div className="movieDetails">
        <img src={movie.img} />
        <h2>{movie.name}</h2>
        <p>{movie.director}</p>
        <p>{movie.genre}</p>
        <p>{movie.synopsis}</p>
        <p>{movie.release_year}</p>
        <p>{movie.country}</p>
        <p>{movie.runtime}</p>
        {currentUser && (
          <Link to={`/movies/${movie.id}/reviews/new`} className="link-button">write a review</Link>
        )}
      </div>
      <ReviewList
        currentUser={currentUser}
        handleReviewDelete={handleReviewDelete}
        reviews={reviews}
        movieId={movie.id}
      />
    </div>
  );
}

export default MoviePage;
