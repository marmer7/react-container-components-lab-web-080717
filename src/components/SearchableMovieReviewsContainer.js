import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "12dae6706b9b4c0bbe47c0b902da9960";
function searchFetch(term) {
  return (`https://api.nytimes.com/svc/movies/v2/reviews/all.json?` +
    `api-key=` +
    NYT_API_KEY +
    "&query=" +
    term)
};

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      reviews: []
    };
  }

  fetchThatGood = () => {
    fetch(searchFetch(this.state.searchTerm))
      .then(res => res.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState(
      {
        searchTerm: e.target.searchTerm.value
      },
      this.fetchThatGood
    );
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.submitHandler} >
          <input type="text" name="searchTerm" />
          <input type="submit" value="Search" />
        </form>
        <MovieReviews reviews={this.state.reviews} searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}
