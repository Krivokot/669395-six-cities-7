import React, { useState } from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, MAP_ZOOM } from '../../const';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../404/404';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../auth';
import PrivateRoute from '../private-route/private-route';
import {
  getOffers,
  getLoadedDataStatus
} from '../../store/offer-data/selectors';
import { getAuthStatus } from '../../store/user/selectors';

function App(props) {
  const { offers, cities } = props;

  const [selectedPoint, setSelectedPoint] = useState(null);

  const { authorizationStatus, isDataLoaded } = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }

  const onListItemHover = (listItemId) => {
    const currentPoint = listItemId;
    setSelectedPoint(currentPoint);
  };

  return (
    <Switch>
      <Route path={AppRoute.MAIN} exact>
        <Main
          offers={offers}
          zoom={MAP_ZOOM}
          selectedPoint={selectedPoint}
          onListItemHover={onListItemHover}
          cities={cities}
        />
      </Route>
      <Route path={'/offer/:id'} exact>
        <Room
          zoom={MAP_ZOOM}
        />
      </Route>
      <Route path={AppRoute.SIGN_IN} exact>
        {authorizationStatus === AuthorizationStatus.AUTH ? <Redirect to="/" /> : <Login />}
      </Route>
      <PrivateRoute
        path={AppRoute.FAVORITES}
        exact
        render={() => <Favorites />}
      />
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

App.propTypes = {
  offers: PropTypes.array.isRequired,
  cities: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  authorizationStatus: getAuthStatus(state),
  isDataLoaded: getLoadedDataStatus(state),
});

export { App };
export default connect(mapStateToProps, null)(App);
