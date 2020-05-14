import React from 'react'

function ReviewList(props) {
  return (
    <div>
      <h3>Reviews</h3>
      {props.reviews.map(review => (
        <React.Fragment key={review.id}>
            <p>{review.rating}</p>
          <p>{review.content}</p>
          {
            props.currentUser
            &&
            <>
            <button onClick={props.handleReviewEdit}>Edit</button>
            <button onClick={props.handleReviewDelete}>Delete</button>
            </>
          }
          </React.Fragment>
        ))}
    </div>
  )
}

export default ReviewList;
