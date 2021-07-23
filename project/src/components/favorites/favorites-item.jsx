import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CityCard from '../card/city-card';
import {CardTypes} from '../../const';
import {connect} from 'react-redux';
import { deleteFromFavorites } from '../../store/api-actions';

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
        {favorites.map((favorite) => (
            <CityCard
              offer={favorite}
              cardType = {CardTypes.FAVORITES}
            />
        ))}
      </div>
    </li>
  )};


  // const mapDispatchToProps = (dispatch) => ({
  //   handleToBookmarks() {
  //     dispatch(deleteFromFavorites());
  //   },
  // });
  
  export default FavoritesItem;
  // export default connect(null, mapDispatchToProps)(FavoritesItem);
