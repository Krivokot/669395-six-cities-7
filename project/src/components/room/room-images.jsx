import React from 'react';
import PropTypes from 'prop-types';

function RoomImages(props) {
  const {image, alt} = props;

  return (
    <div className="property__image-wrapper">
        <img className="property__image" src={image} alt={alt} />
    </div>
  );
}

RoomImages.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
};

export default RoomImages;