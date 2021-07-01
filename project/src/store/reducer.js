import offers from '../mocks/offers';
import cities from '../mocks/cities';
import {ActionType} from './action';


const initialState = {
  activeCity: cities[0],
  filteredOffers: offers.filter((offer) => offer.city.name === 'Paris'),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
        filteredOffers: offers.filter((offer) => offer.city.name === action.payload.name),
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        filteredOffers: offers.filter((offer) => offer.city.name === action.payload.name),
      };
    default:
      return state;
  }
};


export {reducer};
