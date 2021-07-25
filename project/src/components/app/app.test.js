import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { AuthorizationStatus, AppRoute } from '../../const';
import cities from '../../cities';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;

describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();

    const offers = [
      {
        city: {
          name: 'Hamburg',
          location: {
            latitude: 53.550341,
            longitude: 10.000654,
            zoom: 13
          }
        },
        preview_image: 'https://7.react.pages.academy/static/hotel/6.jpg',
        images: [
          'https://7.react.pages.academy/static/hotel/12.jpg',
          'https://7.react.pages.academy/static/hotel/18.jpg',
          'https://7.react.pages.academy/static/hotel/8.jpg',
          'https://7.react.pages.academy/static/hotel/5.jpg',
          'https://7.react.pages.academy/static/hotel/13.jpg',
          'https://7.react.pages.academy/static/hotel/3.jpg',
          'https://7.react.pages.academy/static/hotel/6.jpg',
          'https://7.react.pages.academy/static/hotel/19.jpg',
          'https://7.react.pages.academy/static/hotel/16.jpg',
          'https://7.react.pages.academy/static/hotel/11.jpg',
          'https://7.react.pages.academy/static/hotel/14.jpg',
          'https://7.react.pages.academy/static/hotel/15.jpg',
          'https://7.react.pages.academy/static/hotel/4.jpg',
          'https://7.react.pages.academy/static/hotel/9.jpg'
        ],
        title: 'House in countryside',
        is_favorite: false,
        is_premium: false,
        rating: 2.2,
        type: 'room',
        bedrooms: 1,
        max_adults: 1,
        price: 177,
        goods: [
          'Breakfast',
          'Laptop friendly workspace'
        ],
        host: {
          id: 25,
          name: 'Angelina',
          is_pro: true,
          avatar_url: 'img/avatar-angelina.jpg'
        },
        description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
        location: {
          latitude: 53.558341000000006,
          longitude: 10.001654,
          zoom: 16
        },
        id: 1
      },
      {
        city: {
          name: 'Cologne',
          location: {
            latitude: 50.938361,
            longitude: 6.959974,
            zoom: 13
          }
        },
        preview_image: 'https://7.react.pages.academy/static/hotel/4.jpg',
        images: [
          'https://7.react.pages.academy/static/hotel/2.jpg',
          'https://7.react.pages.academy/static/hotel/17.jpg',
          'https://7.react.pages.academy/static/hotel/12.jpg',
          'https://7.react.pages.academy/static/hotel/13.jpg',
          'https://7.react.pages.academy/static/hotel/5.jpg',
          'https://7.react.pages.academy/static/hotel/1.jpg',
          'https://7.react.pages.academy/static/hotel/6.jpg',
          'https://7.react.pages.academy/static/hotel/15.jpg',
          'https://7.react.pages.academy/static/hotel/11.jpg',
          'https://7.react.pages.academy/static/hotel/7.jpg',
          'https://7.react.pages.academy/static/hotel/4.jpg',
          'https://7.react.pages.academy/static/hotel/3.jpg',
          'https://7.react.pages.academy/static/hotel/10.jpg',
          'https://7.react.pages.academy/static/hotel/18.jpg'
        ],
        title: 'House in countryside',
        is_favorite: false,
        is_premium: true,
        rating: 4.3,
        type: 'house',
        bedrooms: 2,
        max_adults: 3,
        price: 738,
        goods: [
          'Laptop friendly workspace',
          'Breakfast'
        ],
        host: {
          id: 25,
          name: 'Angelina',
          is_pro: true,
          avatar_url: 'img/avatar-angelina.jpg'
        },
        description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
        location: {
          latitude: 50.916361,
          longitude: 6.944974,
          zoom: 16
        },
        id: 3
      },
    ]

    const user = {
      id: 1,
      email: "ramone186@hitmail.com",
      name: "ramone186",
      avatar_url: "https://7.react.pages.academy/static/avatar/3.jpg",
      is_pro: false,
      token: "cmFtb25lMTg2QGhpdG1haWwuY29t",
    }

    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: { authorizationStatus: AuthorizationStatus.AUTH, authInfo: user },
      DATA: { offers: offers, isDataLoaded: true },
      VIEW: { activeCity: cities[0] },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App cities={cities} />
        </Router>
      </Provider>
    );
  });

  // it('should render "Main" when user navigate to "/"', () => {
  //   history.push(AppRoute.MAIN);
  //   render(fakeApp);

  //   expect(screen.getByText(new RegExp('places to stay in', `${cities[0]}`))).toBeInTheDocument();
  // });

  //    it('should render "AuthScreen" when user navigate to "/login"', () => {
  //      history.push(AppRoute.SIGN_IN);
  //      render(fakeApp);

  //      expect(screen.getByText('Sign in')).toBeInTheDocument();
  //      expect(screen.getByLabelText('E-mail')).toBeInTheDocument();
  //      expect(screen.getByLabelText('Password')).toBeInTheDocument();
  //    });

  //    it('should render "RoomScreen" when user navigate to "/offer/:id"', () => {
  //      history.push(AppRoute.ROOM);
  //      render(fakeApp);

  //      expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  //      expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  //      expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  //      expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
  //    });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404. Page not found...')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
});