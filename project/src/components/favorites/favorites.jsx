import {React, useEffect} from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import FavoritesList from './favorites-list';
import { getFavorites } from '../../store/offer-data/selectors';
import {fetchFavoritesOffers} from '../../store/api-actions';
import {connect} from 'react-redux';

function Favorites(props) {

  const {favorites, fetchFavorites} = props;

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList favorites = {favorites} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.array,
  fetchFavorites: PropTypes.func,
};

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFavorites() {
    dispatch(fetchFavoritesOffers());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
