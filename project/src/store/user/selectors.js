import {NameSpace} from '../root-reducer';

export const getUserInfo = (state) => state[NameSpace.USER].authInfo;
export const getAuthStatus = (state) => state[NameSpace.USER].authorizationStatus;
