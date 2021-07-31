import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus } from '../../const';
import cities from '../../cities';
import App from './app';
import { testAuthInfo, testSortType, testReviews, testOffers, testNearBy, testFavorites, testDetails, testCity } from '../../test-mocks/test-mocks';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: { authorizationStatus: AuthorizationStatus.AUTH, authInfo: testAuthInfo },
      DATA: { offers: testOffers, details: testDetails, nearby: testNearBy, favorites: testFavorites, reviews: testReviews, isDetailsLoaded: true, isFavoritesLoaded: true, isDataLoaded: true },
      VIEW: { activeCity: testCity, sortType: testSortType },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App cities={cities} />
        </Router>
      </Provider>
    );
  });


  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found...')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
});
