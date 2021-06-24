import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/map/useMap';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';
import PropTypes from 'prop-types';

function Map(props) {
  const {city, zoom, points, selectedPoint} = props;
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
            icon: (point.title === selectedPoint.title)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points]);

  return (
    <section
      className="cities__map map"
      style={{height: '100vh'}}
      ref={mapRef}
    >

    </section>
  );
}

Map.propTypes = {
  city: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired,
  points: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
      }),
    }),
  ).isRequired,
  selectedPoint: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Map;
