import { React, useEffect } from 'react';
import { useParams } from 'react-router';
import Advantages from './advantages';
import { CardTypes, AuthorizationStatus, FavoriteStatus, AppRoute } from '../../const';
import CityCard from '../card/city-card';
import Comments from '../comments/comments';
import PropTypes from 'prop-types';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import { connect } from 'react-redux';
import {
  fetchOfferDetails,
  fetchOfferNearby,
  fetchReviewsList,
  deleteFromFavorites,
  sendToFavorites
} from '../../store/api-actions';
import RoomImages from './room-images';
import Header from '../header/header';
import {
  getOfferNearby,
  getOfferDetails,
  getOfferReviews,
  getDetailsLoadedStatus
} from '../../store/offer-data/selectors';
import { getCity } from '../../store/view-settings/selectors';
import { getAuthStatus } from '../../store/user/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import { Link } from 'react-router-dom';

const RATING_ROOM_CONVERTER = 23;

function Room(props) {
  const {
    offer,
    nearby,
    reviews,
    zoom,
    fetchOffer,
    fetchNearBy,
    fetchReviews,
    authorizationStatus,
    isDetailsLoaded,
    handleFromBookmarks,
    handleToBookmarks,
  } = props;

  const { id } = useParams();

  useEffect(() => {
    fetchOffer(id);
    fetchNearBy(id);
    fetchReviews(id);

    window.scrollTo(0, 0);
  }, [id, fetchOffer, fetchNearBy, fetchReviews]);

  if (!isDetailsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.slice(0, 6).map((image) => (
                <RoomImages key={image} image={image} alt={offer.type} />
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.is_premium ? (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              ) : (
                ''
              )}
              <div className='property__name-wrapper'>
                <h1 className="property__name">{offer.title}</h1>
                {authorizationStatus === AuthorizationStatus.NO_AUTH ? (
                  <Link to={AppRoute.SIGN_IN}>
                    <button
                      className="property__bookmark-button button"
                      type="button"
                    >
                      <svg
                        className="property__bookmark-icon"
                        width="31"
                        height="33"
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
                        ? 'property__bookmark-button--active button'
                        : 'property__bookmark-button button'
                    }
                    type="button"
                    onClick={() => {
                      offer.is_favorite && CardTypes.FAVORITES
                        ? handleFromBookmarks(FavoriteStatus.FALSE, offer.id)
                        : handleToBookmarks(FavoriteStatus.TRUE, offer.id);
                    }}
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                )}
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: Math.ceil(offer.rating) * RATING_ROOM_CONVERTER }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {offer.rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.max_adults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.goods.map((advantage) => (
                    <Advantages key={advantage} advantage={advantage} />
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={offer.host.avatar_url}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{offer.host.name}</span>
                  <span className="property__user-status">
                    {offer.host.is_pro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">{offer.description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;{' '}
                  <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ReviewsList reviews={reviews} />
                {authorizationStatus === AuthorizationStatus.AUTH ? (
                  <Comments id={id} />
                ) : (
                  ''
                )}
              </section>
            </div>
          </div>
          <Map
            city={offer.city}
            zoom={zoom}
            points={nearby.concat(offer)}
            selectedPoint={offer.id}
            cardType={CardTypes.ROOM}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {nearby.slice(0, 3).map((nearestOffer) => (
                <CityCard
                  key={nearestOffer.id}
                  offer={nearestOffer}
                  cardType={CardTypes.ROOM}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Room.propTypes = {
  offer: PropTypes.object,
  reviews: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  nearby: PropTypes.array,
  fetchOffer: PropTypes.func,
  fetchNearBy: PropTypes.func,
  fetchReviews: PropTypes.func,
  authorizationStatus: PropTypes.string.isRequired,
  isDetailsLoaded: PropTypes.bool.isRequired,
  handleFromBookmarks: PropTypes.func,
  handleToBookmarks: PropTypes.func,
};

const mapStateToProps = (state) => ({
  city: getCity(state),
  offer: getOfferDetails(state),
  authorizationStatus: getAuthStatus(state),
  nearby: getOfferNearby(state),
  reviews: getOfferReviews(state).slice(-10),
  isDetailsLoaded: getDetailsLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchOffer(id) {
    dispatch(fetchOfferDetails(id));
  },
  fetchNearBy(id) {
    dispatch(fetchOfferNearby(id));
  },
  fetchReviews(id) {
    dispatch(fetchReviewsList(id));
  },
  handleToBookmarks(status, id) {
    dispatch(sendToFavorites(status, id));
  },
  handleFromBookmarks(status, id) {
    dispatch(deleteFromFavorites(status, id));
  },
});

export { Room };
export default connect(mapStateToProps, mapDispatchToProps)(Room);
