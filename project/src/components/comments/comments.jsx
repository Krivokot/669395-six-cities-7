import React, {useRef, useState} from 'react';
import { sendComments } from '../../store/api-actions';
import {connect} from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


function Comments({onSubmit}) {

  const {id} = useParams();
  const commentRef = useRef();
  const submitRef = useRef();

  const [commentValue, getCommentValueState] = useState(0);
  const [star, setStarValue] = useState(0);

  const ratingHandler = (evt) => {
    setStarValue(evt.target.value);
  }

  const handleSubmitComment = (evt) => {
    evt.preventDefault();

    commentRef.current.disabled = true;
    submitRef.current.disabled = true;

    onSubmit({
      comment: commentRef.current.value,
      rating: star,
    }, id, commentRef, submitRef);

  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmitComment}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={ratingHandler}>
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea ref={commentRef} className="reviews__textarea form__textarea" onChange={() => getCommentValueState(commentValue+1)} id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" minLength="50" maxLength="300">
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" ref={submitRef} type="submit" disabled={commentValue < 50  ? 'true' : 'false'}>Submit</button>
      </div>
    </form>
  );
}

Comments.propTypes = {
  onSubmit: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(commentData, id, commentRef, submitRef) {
    dispatch(sendComments(commentData, id))
    .then(() => {
      commentRef.current.disabled = false;
      submitRef.current.disabled = false;
      commentRef.current.value = '';
    })
    .catch(() => {
      commentRef.current.disabled = false;
      submitRef.current.disabled = false;
    })
    ;
  },
});


export {Comments};
export default connect(null, mapDispatchToProps)(Comments);

