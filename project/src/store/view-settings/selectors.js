import {NameSpace} from '../root-reducer';

 export const getCity = (state) => state[NameSpace.VIEW].activeCity;
 export const getSortType = (state) => state[NameSpace.VIEW].sortType;