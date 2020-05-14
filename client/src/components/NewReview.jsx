import React, { Component } from 'react'

export default class NewReview extends Component {
  state = {
    movie_id: this.props.movieId,
    rating: null,
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
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleReviewSubmit(this.state);
        this.props.history.push("/");
      }}>
        <h3>Write A Review</h3>
        <input
          type="integer"
          name="rating"
          value={rating}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="content"
          value={content}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
