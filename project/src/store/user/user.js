import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';


const initialState = {
  authInfo: {},
  authorizationStatus: AuthorizationStatus.UNKNOWN,
};

const user = (state = initialState, action) => {
  switch (action.type) {
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


export {user};