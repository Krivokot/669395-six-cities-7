import React from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from './favorites-item';
import { Cities } from '../../const';
import { filterObjects } from '../../util';

function FavoritesList(props) {

  const {favorites} = props;
  
  return (
    <ul className="favorites__list">
      {Object.values(Cities).map((cityName) => {
        const filteredFavorites = filterObjects(favorites, cityName);
        if (filteredFavorites.length > 0) {
         return (<FavoritesItem favorites = {filteredFavorites} city = {cityName}/>)
        }
      })
      }
    </ul>
  );
}

FavoritesList.propTypes = {
  favorites: PropTypes.array,
};

export default FavoritesList;
