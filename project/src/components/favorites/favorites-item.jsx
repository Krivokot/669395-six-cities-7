import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CityCard from '../card/city-card';
import { AppRoute, CardTypes } from '../../const';

function FavoritesItem(props) {
  const { favorites, city } = props;

  if (favorites === null) {
    return ('');
  }

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.MAIN} className="locations__item-link">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.map((favorite) => (
          <CityCard key={favorite.id} offer={favorite} cardType={CardTypes.FAVORITES} />
        ))}
      </div>
    </li>
  );
}

FavoritesItem.propTypes = {
  favorites: PropTypes.array,
};

export default FavoritesItem;
