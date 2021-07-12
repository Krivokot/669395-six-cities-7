
export const ActionType = {
  CHANGE_CITY: 'changeCity',
  LOAD_OFFERS: 'loadOffers',
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
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};
