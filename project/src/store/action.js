
export const ActionType = {
  CHANGE_CITY: 'changeCity',
  LOAD_OFFERS: 'loadOffers',
  SORT_OFFERS: 'sortOffers',
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
};
