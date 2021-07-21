import {ActionType} from '../action';

const initialState = {
  offers: [],
  details: [],
  nearby: [],
  reviews: [],
  isDataLoaded: false,
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
        isDataLoaded: true,
      };
    case ActionType.LOAD_NEARBY:
      return {
        ...state,
        nearby: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};


export {offerData};
