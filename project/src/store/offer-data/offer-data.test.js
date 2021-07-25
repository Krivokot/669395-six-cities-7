import { offerData } from './offer-data';
import { ActionType } from '../action';

const offers = [
  {
    offer: 1,
  },
  {
    offer: 2,
  },
];

const details = [
  {
    details: 1,
  },
];

const reviews = [
  {
    review: 1,
  },

  {
    review: 2,
  },
];

const favorites = [
  {
    offer: 1,
  },

  {
    offer: 2,
  },
];

const nearby = [
  {
    offer: 1,
  },

  {
    offer: 2,
  },
];

describe('Reducer: offerData', () => {
  it('without additional parameters should return initial state', () => {
    expect(offerData(undefined, {}))
      .toEqual({ offers: [], reviews: [], details: [], favorites: [], nearby: [], isDataLoaded: false, isDetailsLoaded: false });
  });

  it('should update offers by load offers', () => {
    const state = { offers: [], isDataLoaded: false };
    const loadOffers = {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };

    expect(offerData(state, loadOffers))
      .toEqual({ offers, isDataLoaded: true });
  });

  it('should update details by load details', () => {
    const state = { details: [], isDetailsLoaded: false };
    const loadDetails = {
      type: ActionType.LOAD_DETAILS,
      payload: details,
    };

    expect(offerData(state, loadDetails))
      .toEqual({ details, isDetailsLoaded: true });
  });

  it('should update reviews by load reviews', () => {
    const state = { reviews: []};
    const loadReviews = {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };

    expect(offerData(state, loadReviews))
      .toEqual({ reviews});
  });

  it('should update favorites by load favorites', () => {
    const state = { favorites: []};
    const loadFavorites = {
      type: ActionType.LOAD_FAVORITES,
      payload: favorites,
    };

    expect(offerData(state, loadFavorites))
      .toEqual({ favorites});
  });

  it('should update nearby by load nearby', () => {
    const state = { nearby: []};
    const loadNearby = {
      type: ActionType.LOAD_NEARBY,
      payload: nearby,
    };

    expect(offerData(state, loadNearby))
      .toEqual({ nearby});
  });
});
