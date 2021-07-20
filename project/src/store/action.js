
export const ActionType = {
  CHANGE_CITY: 'main/changeCity',
  LOAD_OFFERS: 'main/loadOffers',
  LOAD_DETAILS: 'details/loadDetails',
  LOAD_NEARBY: 'details/loadNearby',
  SORT_OFFERS: 'main/sortOffers',
  REQUIRED_AUTHORIZATION: 'auth/requiredAuthorization',
  LOGOUT: 'auth/logout',
  LOAD_REVIEWS: 'details/loadReviews',
  LOAD_USER_INFO: 'auth/loadUserInfo',
};

export const changeCity = (cityName) => ({
  type: ActionType.CHANGE_CITY,
  payload: cityName,
});

export const sortOffers = (sort) => ({
  type: ActionType.SORT_OFFERS,
  payload: sort,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadDetails = (offerDetails) => ({
  type: ActionType.LOAD_DETAILS,
  payload: offerDetails,
});

export const loadNearby = (nearbyOffers) => ({
  type: ActionType.LOAD_NEARBY,
  payload: nearbyOffers,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const loadUserInfo = (userInfo) => ({
  type: ActionType.LOAD_USER_INFO,
  payload: userInfo,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const logout = () => ({
  type: ActionType.LOGOUT,
});
