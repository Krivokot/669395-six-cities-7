import MockAdapter from 'axios-mock-adapter';
import { createAPI } from '../services/api';
import { ActionType } from './action';
import {
  fetchOffersList,
  fetchOfferDetails,
  fetchOfferNearby,
  fetchFavoritesOffers,
  fetchReviewsList,
  checkAuth,
  sendComments,
  sendToFavorites,
  deleteFromFavorites,
  loadAuthInfo,
  login
} from './api-actions';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';

let api = null;

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => { });
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{ fake: true }]);

    return checkAuthLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = { email: 'test@test.ru', password: '123456' };
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{ fake: true }]);

    return loginLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offrsLoader = fetchOffersList();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [{ fake: true }]);

    return offrsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{ fake: true }],
        });
      });
  });

  it('should make a correct API call to GET /hotels/id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const detailsLoader = fetchOfferDetails(id);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${id}`)
      .reply(200, [{ fake: true }]);

    return detailsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_DETAILS,
          payload: [{ fake: true }],
        });
      });
  });

  it('should make a correct API call to GET /hotels/id/nearby', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const nearbyLoader = fetchOfferNearby(id);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${id}/nearby`)
      .reply(200, [{ fake: true }]);

    return nearbyLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY,
          payload: [{ fake: true }],
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteLoader = fetchFavoritesOffers();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [{ fake: true }]);

    return favoriteLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [{ fake: true }],
        });
      });
  });

  it('should make a correct API call to GET /comments/id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const reviewsLoader = fetchReviewsList(id);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${id}`)
      .reply(200, [{ fake: true }]);

    return reviewsLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{ fake: true }],
        });
      });
  });

  it('should make a correct API call to POST /comments/id', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const fakeComment = { comment: 'test@test.ru', rating: 1 };
    const commentSender = sendComments(fakeComment, id);

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${id}`)
      .reply(200, [{ fake: true }]);

    return commentSender(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it('should make a correct API call to POST /favorites/id/1', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 1;
    const favoriteSender = sendToFavorites(status, id);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/${id}/${status}`)
      .reply(200, [{ fake: true }]);

    return favoriteSender(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });

  it('should make a correct API call to POST /favorites/id/0', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 1;
    const status = 0;
    const favoriteDeleter = deleteFromFavorites(status, id);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/${id}/${status}`)
      .reply(200, [{ fake: true }]);

    return favoriteDeleter(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it('should make a correct API call to GET /login (authInfo)', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const userLoader = loadAuthInfo();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{ fake: true }]);

    return userLoader(dispatch, () => { }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_USER_INFO,
          payload: [{ fake: true }],
        });
      });
  });
});
