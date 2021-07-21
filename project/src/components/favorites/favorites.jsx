import React from 'react';
import CityCard from '../card/city-card';
import {CardTypes} from '../../const';
import PropTypes from 'prop-types';
import Header from '../header/header';

function Favorites(props) {
  const {offers} = props;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="img/logo.svg">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) =>
                    offer.is_favorite ?
                      <CityCard
                        offer={offer}
                        cardType = {CardTypes.FAVORITES}
                      />
                      : '')}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="img/logo.svg">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) =>
                    offer.is_favorite ?
                      <CityCard
                        offer={offer}
                        cardType = {CardTypes.FAVORITES}
                      />
                      : '')}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

Favorites.propTypes = {
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
};


export default Favorites;
