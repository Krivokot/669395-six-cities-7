import React from 'react';
import CityCard from '../card/city-card';
import {CardTypes} from '../../const';
import PropTypes from 'prop-types';

function OffersList(props) {
  const {offers, onListItemHover, city} = props;

  const listItemHoverHandler = (evt) => {
    onListItemHover(evt.target.innerText);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CityCard
          key={offer.id}
          offer={offer}
          cardType = {CardTypes.MAIN}
          titleEnter = {listItemHoverHandler}
          city={city}
        />
      ))}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      bedrooms: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      goods: PropTypes.array,
      id: PropTypes.number.isRequired,
      image: PropTypes.array,
      is_favorite: PropTypes.bool.isRequired,
      is_premium: PropTypes.bool.isRequired,
      max_adults: PropTypes.number.isRequired,
      preview_image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onListItemHover: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired,
};


export default OffersList;
