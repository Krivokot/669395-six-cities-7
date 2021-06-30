import React from 'react';
import PropTypes from 'prop-types';

function Advantages(props) {
  const {advantage} = props;

  return (
    <li className="property__inside-item">
      {advantage}
    </li>
  );
}

Advantages.propTypes = {
  advantage: PropTypes.string.isRequired,
};

export default Advantages;
