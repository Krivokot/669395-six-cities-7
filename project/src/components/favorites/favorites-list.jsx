import React from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from './favorites-item';
import { Cities } from '../../const';
import { filterObjects } from '../../util';

function FavoritesList(props) {

  const {favorites} = props;

  return (
    <ul className="favorites__list">
      <FavoritesItem favorites = {filterObjects(favorites, Cities.PARIS)} city = {Cities.PARIS}  />
      <FavoritesItem favorites = {filterObjects(favorites, Cities.COLOGNE)} city = {Cities.COLOGNE}  />
      <FavoritesItem favorites = {filterObjects(favorites, Cities.BRUSSELS)} city = {Cities.BRUSSELS}  />
      <FavoritesItem favorites = {filterObjects(favorites, Cities.AMSTERDAM)} city = {Cities.AMSTERDAM}  />
      <FavoritesItem favorites = {filterObjects(favorites, Cities.HAMBURG)} city = {Cities.HAMBURG}  />
      <FavoritesItem favorites = {filterObjects(favorites, Cities.DUSSELDORF)} city = {Cities.DUSSELDORF}  />
    </ul>
  );
}

FavoritesList.propTypes = {
  favorites: PropTypes.array,
};

export default FavoritesList;
