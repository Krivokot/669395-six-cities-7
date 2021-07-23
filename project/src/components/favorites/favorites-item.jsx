import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CityCard from '../card/city-card';
import {CardTypes} from '../../const';

function FavoritesItem(props) {
  
  const {favorites} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
            <Link>
              <a className="locations__item-link">
                <span>Cologne</span>
              </a>
            </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.map((favorite) =>
            <CityCard
              offer={favorite}
              cardType = {CardTypes.FAVORITES}
            />
            )}
      </div>
    </li>
  )};



export default FavoritesItem;
