import React, {useState} from 'react';
import CityCard from '../card/city-card';
import {CardTypes, AppRoute} from '../../const'

function OffersList(props) {
    const {offers} = props;
    const [mouseMove, setCardIsActive] = useState({
        mouseIn: false,
        mouseOut: true,
    });

    const {mouseIn, mouseOut} = mouseMove;

  return (
    <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => 
        <CityCard 
            offer={offer}
            cardType = {CardTypes.MAIN}
        />)}
    </div>
  );
}

export default OffersList;
