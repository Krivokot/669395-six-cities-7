import React, { useState } from 'react';
import {AppRoute, CardTypes, FavoriteStatus} from '../../const';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { sendToFavorites } from '../../store/api-actions';
import {connect} from 'react-redux';

function CityCard(props) {
  const {offer, cardType, titleEnter, onClick} = props;

  const [activeFlag, setActive] = useState(offer.is_favorite);

  const handleToBookmarks = (evt) => {
    evt.preventDefault();
    setActive(!activeFlag);
    onClick(activeFlag ? FavoriteStatus.FALSE : FavoriteStatus.TRUE, offer.id);
  };

  console.log(offer.is_favorite);

  return (
    <article className={cardType === CardTypes.MAIN ? 'cities__place-card place-card' : 'favorites__card place-card'}>
      {offer.is_premium && cardType === CardTypes.MAIN ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div className ={cardType === CardTypes.MAIN ? 'cities__image-wrapper place-card__image-wrapper' : 'favorites__image-wrapper place-card__image-wrapper'}>
        <a href="img/apartment-01.jpg">
          <img className="place-card__image" src={offer.preview_image} width="260" height="200" alt="Place" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={offer.is_favorite || activeFlag ? 'place-card__bookmark-button--active button' : 'place-card__bookmark-button button'} type="button" onClick={handleToBookmarks}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: 80}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" onMouseEnter = {titleEnter}>
          <Link to = {`${AppRoute.ROOM}${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

CityCard.propTypes = {
  offer: PropTypes.object.isRequired,
  cardType: PropTypes.string.isRequired,
  titleEnter: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  onClick(status, id) {
    dispatch(sendToFavorites(status, id));
  },
});

export {CityCard};
export default connect(null, mapDispatchToProps)(CityCard);
