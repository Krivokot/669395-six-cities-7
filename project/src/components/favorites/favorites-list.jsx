import React from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from './favorites-item';

function FavoritesList(props) {

  const {favorites} = props;

  return (
    <ul className="favorites__list">
      <FavoritesItem favorites = {favorites}  />
    </ul>
  )};



export default FavoritesList;
