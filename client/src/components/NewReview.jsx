import React, { Component } from 'react'

export default class NewReview extends Component {
  state = {
    movie_id: this.props.movieId,
    rating: "",
    content: ""
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }
    
  render() {
    const { rating, content } = this.state;
    return (
      <form
        
        onSubmit={(e) => {
        e.preventDefault();
        this.props.handleReviewSubmit(this.state);
        this.props.history.push(`/movies/${this.props.movieId}/moviepage`);
      }}>
        <h4>Write A Review</h4>
        <div className="review-form">
          <input
          placeholder="rating"
          autoFocus
          required
          type="integer"
          name="rating"
          value={rating}
          onChange={this.handleChange}
        />
          <textarea
          placeholder="text"
          required
          rows={12}
          cols={60}
          type="text"
          name="content"
          value={content}
          onChange={this.handleChange}
          />
          </div>
        <button>Submit</button>
      </form>
    )
  }
}
