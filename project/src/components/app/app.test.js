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

    const createFakeStore = configureStore({});
    store = createFakeStore({
      USER: { authorizationStatus: AuthorizationStatus.AUTH},
      DATA: { isDataLoaded: true },
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
