import React from 'react';
import Review from './review';
import PropTypes from 'prop-types';

function ReviewsList(props) {
  const {reviews} = props;

  reviews.sort((a,b) => new Date(b.date) - new Date(a.date))

  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <Review
          key={review.comment}
          review={review}
        />
      ))}
    </ul>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
