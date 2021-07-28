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


const RATING_CARD_CONVERTER = 15;


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
  };

  const changeImagesWrapperClass = () => {
    switch (cardType) {
      case CardTypes.MAIN:
        return ('cities__image-wrapper place-card__image-wrapper');
      case CardTypes.ROOM:
        return ('near-places__image-wrapper place-card__image-wrapper');
      case CardTypes.FAVORITES:
        return ('favorites__image-wrapper place-card__image-wrapper');
      default:
        break;
    }
  };

  const changeArticleClass = () => {
    switch (cardType) {
      case CardTypes.MAIN:
        return ('cities__place-card place-card');
      case CardTypes.ROOM:
        return ('near-places__card place-card');
      case CardTypes.FAVORITES:
        return ('favorites__card place-card');
      default:
        break;
    }
  };

  return (
    <article
      onMouseEnter={mouseEvent}
      className={changeArticleClass()}
    >
      {offer.is_premium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ''
      )}
      <div
        className={changeImagesWrapperClass()}
      >
        <img
          className="place-card__image"
          src={offer.preview_image}
          width={cardType === CardTypes.FAVORITES ? '150' : '260'}
          height={cardType === CardTypes.FAVORITES ? '110' : '200'}
          alt="Place"
        />
      </div>
      <div className={cardType === CardTypes.FAVORITES ? 'favorites__card-info place-card__info' : 'place-card__info'}>
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
            <span style={{width: (Math.round(offer.rating)*RATING_CARD_CONVERTER)}}></span>
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
