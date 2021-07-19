import cities from '../mocks/cities';
import {ActionType} from './action';
import {SortTypes, AuthorizationStatus} from '../const';


const initialState = {
  activeCity: cities[0],
  sortType: SortTypes.POPULAR,
  offers: [],
  details: [],
  nearby: [],
  reviews: [],
  authInfo: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.SORT_OFFERS:
      return {
        ...state,
        sortType: action.payload,
      };
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
    case ActionType.LOAD_USER_INFO:
      return {
        ...state,
        authInfo: action.payload,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authInfo: {},
      };
    default:
      return state;
  }
};


export {reducer};
