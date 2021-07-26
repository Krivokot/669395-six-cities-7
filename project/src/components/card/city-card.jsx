import React from 'react';
import {
  AppRoute,
  CardTypes,
  FavoriteStatus,
  AuthorizationStatus
} from '../../const';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  deleteFromFavorites,
  sendToFavorites
} from '../../store/api-actions';
import { connect } from 'react-redux';
import { getAuthStatus } from '../../store/user/selectors';

//FIXME сделать добавление в избранное для ROOM

function CityCard(props) {
  const {
    offer,
    cardType,
    elementEnter,
    handleToBookmarks,
    handleFromBookmarks,
    authorizationStatus,
  } = props;

  const mouseEvent = () => {
    if (cardType === CardTypes.MAIN) {
      elementEnter(offer.id);
    }
    return;
  }

  return (
    <article
      onMouseEnter={mouseEvent}
      className={
        cardType === CardTypes.MAIN
          ? 'cities__place-card place-card'
          : cardType === CardTypes.ROOM 
          ? 'near-places__card place-card' 
          : 'favorites__card place-card'
      }
    >
      {offer.is_premium && (cardType === CardTypes.MAIN || cardType === CardTypes.ROOM) ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ''
      )}
      <div
        className={
          cardType === CardTypes.MAIN
            ? 'cities__image-wrapper place-card__image-wrapper'
            : cardType === CardTypes.ROOM
            ? 'near-places__image-wrapper place-card__image-wrapper'
            : 'favorites__image-wrapper place-card__image-wrapper'
        }
      >
        <a>
          <img
            className="place-card__image"
            src={offer.preview_image}
            width="260"
            height="200"
            alt="Place"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          {authorizationStatus === AuthorizationStatus.NO_AUTH ? (
            <Link to={AppRoute.SIGN_IN}>
              <button
                className="place-card__bookmark-button button"
                type="button"
              >
                <svg
                  className="place-card__bookmark-icon"
                  width="18"
                  height="19"
                >
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </Link>
          ) : (
            <button
              className={
                offer.is_favorite
                  ? 'place-card__bookmark-button--active button'
                  : 'place-card__bookmark-button button'
              }
              type="button"
              onClick={() => {
                offer.is_favorite && CardTypes.FAVORITES
                  ? handleFromBookmarks(FavoriteStatus.FALSE, offer.id)
                  : handleToBookmarks(FavoriteStatus.TRUE, offer.id);
              }}
            >
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          )}
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: (Math.round(offer.rating)*15)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.ROOM}${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

CityCard.propTypes = {
  offer: PropTypes.object.isRequired,
  cardType: PropTypes.string.isRequired,
  elementEnter: PropTypes.func,
  handleToBookmarks: PropTypes.func,
  handleFromBookmarks: PropTypes.func,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleToBookmarks(status, id) {
    dispatch(sendToFavorites(status, id));
  },
  handleFromBookmarks(status, id) {
    dispatch(deleteFromFavorites(status, id));
  },
});

export { CityCard };
export default connect(mapStateToProps, mapDispatchToProps)(CityCard);
