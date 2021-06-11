import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const cardsArray = [1, 2, 3, 4, 5];

const Setting = {
  CARDS_COUNT: cardsArray,
  PLACES_COUNT: cardsArray.length,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      citiesCardsListLength = {Setting.PLACES_COUNT}
      citiesCardsList = {Setting.CARDS_COUNT}
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'),
);
