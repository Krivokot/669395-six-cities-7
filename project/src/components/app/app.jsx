import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute} from '../../const';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../404/404';


function App(props) {
  const {citiesCardsList, citiesCardsListLength} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main
            citiesCardsListLength = {citiesCardsListLength}
            citiesCardsList = {citiesCardsList}
          />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <Room />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <Favorites />
        </Route>
        <Route path={AppRoute.SIGN_IN} exact>
          <Login />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  citiesCardsListLength: PropTypes.number.isRequired,
  citiesCardsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default App;
