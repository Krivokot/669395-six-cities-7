
export const ActionType = {
  CHANGE_CITY: 'changeCity',
  LOAD_OFFERS: 'loadOffers',
  LOAD_DETAILS: 'loadDetails',
  LOAD_NEARBY: 'loadNearby',
  SORT_OFFERS: 'sortOffers',
  REQUIRED_AUTHORIZATION: 'requiredAuthorization',
  LOGOUT: 'logout',
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: ActionType.CHANGE_CITY,
    payload: cityName,
  }),
  sortOffers: (sort) => ({
    type: ActionType.SORT_OFFERS,
    payload: sort,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadDetails: (offerDetails) => ({
    type: ActionType.LOAD_DETAILS,
    payload: offerDetails,
  }),
  loadNearby: (nearbyOffers) => ({
    type: ActionType.LOAD_NEARBY,
    payload: nearbyOffers,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
