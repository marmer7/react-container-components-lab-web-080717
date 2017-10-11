import React from "react";

function MovieReviews({ reviews }) {
  const movieList = reviews.map(review => {
    return (
      <div className="review">
        <h1>{review.display_title}</h1>
        <p>{review.headline}</p>
        <p>{review.summary_short}</p>
      </div>
    );
  });

  return <div className="review-list">{movieList}</div>;
}

MovieReviews.defaultProps = { reviews: [] };

export default MovieReviews;
