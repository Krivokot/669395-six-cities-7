import offers from '../mocks/offers';
import cities from '../mocks/cities';
import {ActionType} from './action';
import {SortTypes} from '../const';


const initialState = {
  activeCity: cities[0],
  filteredOffers: offers.filter((offer) => offer.city.name === 'Paris'),
  sortType: SortTypes.POPULAR,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
        filteredOffers: offers.filter((offer) => offer.city.name === action.payload.name),
      };
    case ActionType.SORT_OFFERS:
      return {
        ...state,
        sortType: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
