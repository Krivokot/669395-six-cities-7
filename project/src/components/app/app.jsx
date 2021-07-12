import React, {useState} from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {AppRoute, MAP_ZOOM} from '../../const';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../404/404';
import LoadingScreen from '../loading-screen/loading-screen';
import {isCheckedAuth} from '../../auth';

function App(props) {
  const {offers, reviews, cities} = props;

  const {authorizationStatus, isDataLoaded} = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const [selectedPoint, setSelectedPoint] = useState({});
  const onListItemHover = (listItemName) => {
    const currentPoint = offers.find((offer) =>
      offer.title === listItemName,
    );
    setSelectedPoint(currentPoint);
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.MAIN} exact>
          <Main
            offers = {offers}
            zoom = {MAP_ZOOM}
            selectedPoint = {selectedPoint}
            onListItemHover = {onListItemHover}
            cities = {cities}
          />
        </Route>
        <Route path={AppRoute.ROOM} exact>
          <Room
            offer = {offers[1]}
            offers = {offers}
            reviews = {reviews}
            zoom = {MAP_ZOOM}
            selectedPoint = {selectedPoint}
            onListItemHover = {onListItemHover}
          />
        </Route>
        <Route path={AppRoute.FAVORITES} exact>
          <Favorites
            offers = {offers}
          />
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
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      bedrooms: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      goods: PropTypes.array,
      id: PropTypes.number.isRequired,
      image: PropTypes.array,
      isFavorite: PropTypes.bool,
      isPremium: PropTypes.bool.isRequired,
      maxAdults: PropTypes.number.isRequired,
      previewImage: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      comment: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
  cities: PropTypes.array.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
});

export {App};
export default connect(mapStateToProps, null)(App);
