import React, { Component } from 'react'
import { getOneReview } from '../services/api-helper';

export default class ReviewEdit extends Component {
  state = {
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
      content: review.content
    })
  }
  
  render() {
    return (
      <form
        onSubmit={(e) => {
        e.preventDefault();
        this.props.handleReviewEdit(this.props.reviewId, this.state);
        this.props.history.push(`/movies/${this.props.movieId}/moviepage`);
      }}>
        <h4>Edit Review</h4>
        <textarea className="review-form"
          required
          rows={12}
          cols={60}
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
