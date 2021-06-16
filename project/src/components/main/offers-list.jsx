import React, {useState} from 'react';
import CityCard from '../card/city-card';
import {CardTypes} from '../../const';
import PropTypes from 'prop-types';

function OffersList(props) {
  const {offers} = props;
  const [mouseMove, setCardIsActive] = useState({
    mouseIn: false,
    mouseOut: true,
  });

  const {mouseIn, mouseOut} = mouseMove;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CityCard
          key={offer}
          offer={offer}
          cardType = {CardTypes.MAIN}
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

export default OffersList;
