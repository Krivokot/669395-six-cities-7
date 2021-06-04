import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

function App(props) {
  const {citiesCardsList, citiesCardsListLength} = props;

  return (
    <Main citiesCardsListLength = {citiesCardsListLength} citiesCardsList = {citiesCardsList}/>
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
