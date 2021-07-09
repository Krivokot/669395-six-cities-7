import React from 'react';
import PropTypes from 'prop-types';
import OffersList from '../main/offers-list';
import Map from '../map/map';
import {CardTypes, SortTypes} from '../../const';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import Sort from '../sort/sort';

function Main(props) {
  const {offers, zoom, selectedPoint, onListItemHover, activeCity, cities, onChangeCity, sortType} = props;

  switch (sortType) { // TODO вынести сортировку в функцию
    case SortTypes.LOW_PRICE:
      offers.sort((a,b) => a.price - b.price);
      break;
    case SortTypes.HIGH_PRICE:
      offers.sort((a,b) => b.price - a.price);
      break;
    case SortTypes.TOP_RATED:
      offers.sort((a,b) => b.rating - a.rating);
      break;
    default: //FIXME не работает popular
      break;
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="img/logo.svg">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="img/logo.svg">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="img/logo.svg">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {cities.map((city) => (
                <>
                  <li className="locations__item">
                    <a
                      className={activeCity.name === city.name ? 'locations__item-link tabs__item--active' : 'locations__item-link tabs__item'}
                      onClick={() =>
                        onChangeCity(city)}
                    >
                      <span>{city.name}</span>
                    </a>
                  </li>
                </>
              ))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {activeCity.name}</b>
              <Sort />
              <OffersList
                offers = {offers}
                onListItemHover={onListItemHover}
                city={activeCity}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={activeCity}
                zoom={zoom}
                points={offers}
                selectedPoint={selectedPoint}
                cardType = {CardTypes.MAIN}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      bedrooms: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      goods: PropTypes.array,
      id: PropTypes.number.isRequired,
      image: PropTypes.array,
      isFavorite: PropTypes.bool,
      isPremium: PropTypes.bool.isRequired,
      maxAdults: PropTypes.number.isRequired,
      previewImage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
  zoom: PropTypes.number.isRequired,
  selectedPoint: PropTypes.object.isRequired,
  onListItemHover: PropTypes.func.isRequired,
  activeCity: PropTypes.object,
  cities: PropTypes.array.isRequired,
  onChangeCity: PropTypes.func,
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.filteredOffers,
  activeCity: state.activeCity,
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
