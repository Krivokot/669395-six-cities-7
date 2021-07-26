import {NameSpace} from '../root-reducer';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOfferDetails = (state) => state[NameSpace.DATA].details;
export const getOfferNearby = (state) => state[NameSpace.DATA].nearby;
export const getOfferReviews = (state) => state[NameSpace.DATA].reviews;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;
export const getLoadedDataStatus = (state) => state[NameSpace.DATA].isDataLoaded;
export const getDetailsLoadedStatus = (state) => state[NameSpace.DATA].isDetailsLoaded;
export const getFavoritesLoadedStatus = (state) => state[NameSpace.DATA].isFavoritesLoaded;

