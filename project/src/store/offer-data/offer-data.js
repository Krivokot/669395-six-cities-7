import {ActionType} from '../action';

const initialState = {
  offers: [],
  details: [],
  nearby: [],
  reviews: [],
  favorites: [],
  isDataLoaded: false,
  isDetailsLoaded: false,
  isFavoritesLoaded: false,
};

const offerData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_DETAILS:
      return {
        ...state,
        details: action.payload,
        isDetailsLoaded: true,
      };
    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearby: action.payload,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        isFavoritesLoaded: true,
      };
    default:
      return state;
  }
};


export {offerData};
