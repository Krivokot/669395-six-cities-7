import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/map/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import PropTypes from 'prop-types';
import {CardTypes} from '../../const';

function Map(props) {
  const {city, zoom, points, selectedPoint, cardType} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city, zoom);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          },
          {
            icon: (point.id === selectedPoint)
              ? currentCustomIcon
              : defaultCustomIcon,
          },
          )
          .addTo(map);
      });
    }
  }, [selectedPoint, map, points, currentCustomIcon, defaultCustomIcon]);

  return (
    <section
      className={cardType === CardTypes.MAIN ? 'cities__map map' : 'property__map map'}
      // style={{height: '100vh'}}
      ref={mapRef}
    >

    </section>
  );
}

Map.propTypes = {
  city: PropTypes.object.isRequired,
  zoom: PropTypes.number.isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      }),
    }),
  ).isRequired,
  selectedPoint: PropTypes.number,
  cardType: PropTypes.string.isRequired,
};

export default Map;
