import React from 'react'

function ReviewList(props) {
  return (
    <reviews>
      <h3>Reviews</h3>
      {props.reviews.map(review => (
        <React.Fragment key={review.id}>
            <p>{review.rating}</p>
          <p>{review.content}</p>
          <button onClick={props.handleReviewDelete}>Delete</button>
          </React.Fragment>
        ))}
    </reviews>
  )
}

export default ReviewList;
