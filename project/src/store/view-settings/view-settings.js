import cities from '../../cities';
import {ActionType} from '../action';
import {SortTypes} from '../../const';


const initialState = {
  activeCity: cities[0],
  sortType: SortTypes.POPULAR,
};

const viewSettings = (state = initialState, action) => {
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
    default:
      return state;
  }
};


export {viewSettings};
