import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import cities from './mocks/cities';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import {requireAuthorization} from './store/action';
import {checkAuth, fetchOffersList} from './store/api-actions';
import {AuthorizationStatus} from './const';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

store.dispatch(checkAuth());
store.dispatch(fetchOffersList());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        cities = {cities}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
