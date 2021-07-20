import {React, useEffect} from 'react';
import { useParams } from 'react-router';
import Advantages from './advantages';
import {CardTypes, AuthorizationStatus} from '../../const';
import CityCard from '../card/city-card';
import Comments from '../comments/comments';
import PropTypes from 'prop-types';
import ReviewsList from '../reviews-list/reviews-list';
import Map from '../map/map';
import {connect} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {fetchOfferDetails, fetchOfferNearby, fetchReviewsList} from '../../store/api-actions';
import RoomImages from './room-images';
import Header from '../header/header';

//FIXME при переходе через урл, карта не меняется
//FIXME случается, что подсвечивается selectedPoint
//FIXME глючит на вложенных объектах
//TODO сделать рэйтинг 
//FIXME плывет верстка в местах поблизости
//TODO чистить редакс при переходе по страницам
//TODO сделать переход на 404 в случае несуществующего оффера
//TODO добавить обработки ошибок
//FIXME комменты чистятся при сайнауте


function Room(props) {
  const {offer, nearby, reviews, city, zoom, selectedPoint, onListItemHover, fetchOffer, fetchNearBy, fetchReviews, authorizationStatus} = props;
  const history = useHistory();
  const {id} = useParams();

  useEffect(() => {
    fetchOffer(id);
    fetchNearBy(id);
    fetchReviews(id);
  }, [id])

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {/* {offer.images.map((image) => (
                <RoomImages  
                  key = {image}
                  image = {image}
                  alt = {offer.type}
                />
              ))} */}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.is_premium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                :
                ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: 80}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {/* {offer.goods.map((advantage) => (
                    <Advantages
                      key={advantage}
                      advantage={advantage}
                    />
                  ))} */}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src='' width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {/* {offer.host.name} */}
                  </span>
                  <span className="property__user-status">
                    {/* {offer.host.is_pro ? 'Pro' : ''} */}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList
                  reviews = {reviews}
                />
                {authorizationStatus === AuthorizationStatus.AUTH ?
                  <Comments id = {id}/> :
                  ''
                }
              </section>
            </div>
          </div>
          <Map
            city={city}
            zoom={zoom}
            points={nearby}
            selectedPoint={selectedPoint}
            cardType = {CardTypes.ROOM}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearby.map((nearestOffer) => (
                <CityCard
                  key={`${nearestOffer.title}`}
                  offer={nearestOffer}
                  cardType = {CardTypes.ROOM}
                  onListItemHover={onListItemHover}
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
  offer: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
  city: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  selectedPoint: PropTypes.object.isRequired,
  onListItemHover: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.activeCity,
  offer: state.details,
  authorizationStatus: state.authorizationStatus,
  nearby: state.nearby,
  reviews: state.reviews,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOffer(id) {
    dispatch(fetchOfferDetails(id))
  },
  fetchNearBy(id) {
    dispatch(fetchOfferNearby(id))
  },
  fetchReviews(id) {
    dispatch(fetchReviewsList(id))
  }
});

export {Room};
export default connect(mapStateToProps, mapDispatchToProps)(Room);
