import React from 'react';
import { Link } from 'react-router-dom';

function ReviewList(props) {
  return (
    <div>
      <h3>Reviews</h3>
      {props.reviews.map(review => (
        <React.Fragment key={review.id}>
            <p>{review.rating}</p>
            <p>{review.content}</p>
          {
            props.currentUser && review.user_id === props.currentUser.id
            ?
            <>
            <Link to={`/movies/${props.movieId}/reviews/${review.id}/edit`}>Edit</Link>
            <button onClick={() => { props.handleReviewDelete(review.id)}}>Delete</button>
            </>
            :
            <></>
          }
          </React.Fragment>
        ))}
    </div>
  )
}

export default ReviewList;
