import React, { Component } from 'react'
import { getOneReview } from '../services/api-helper';

export default class ReviewEdit extends Component {
  state = {
    rating: "",
    content: ""
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const review = await getOneReview(this.props.movieId, this.props.reviewId);
    this.setState({
      rating: review.name,
      content: review.content
    })
  }
  
  render() {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleReviewEdit(this.props.reviewId, this.state);
        this.props.history.push(`/movies/${this.props.movieId}/moviepage`);
      }}>
        <h3>Edit Review</h3>
        <input
          type="text"
          name="rating"
          value={this.state.rating}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="content"
          value={this.state.content}
          onChange={this.handleChange}
        />
        <button>Submit</button>

      </form>
    )
  }
}
