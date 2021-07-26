import React from 'react';
import CityCard from '../card/city-card';
import {CardTypes} from '../../const';
import PropTypes from 'prop-types';

function OffersList(props) {
  const {offers, onListItemHover, city} = props;

  const listItemHoverHandler = (el) => {
    onListItemHover(el);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <CityCard
          key={offer.id}
          offer={offer}
          cardType = {CardTypes.MAIN}
          elementEnter = {listItemHoverHandler}
          city={city}
        />
      ))}
    </div>
  );
}

OffersList.propTypes = {
  offers: PropTypes.array.isRequired,
  onListItemHover: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired,
};


export default OffersList;
