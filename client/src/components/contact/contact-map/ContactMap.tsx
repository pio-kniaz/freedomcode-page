import React, { useState } from 'react';
import MapGL, { Marker } from 'react-map-gl';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './contact-map.scss';

import ContactForm from 'components/contact/contact-form/ContactForm';

type ViewPort = {
  width: string,
  height: string,
  latitude: number,
  longitude: number,
  zoom: number,
  markerVisible: boolean,
}

const ContactMap: React.FC = () => {
  const [viewport] = useState<ViewPort>({
    width: '100%',
    height: '100%',
    latitude: 52.22967560,
    longitude: 21.01222870,
    zoom: 13,
    markerVisible: true,
  });
  return (
    <div className="contact-map">
      <div className="contact-map__text">
        <p className="contact-map__text-title">
          You have an idea, You need someone to bring it to life?
        </p>
        <p className="contact-map__text-subtitle">Lets contact with Me!</p>
        <ContactForm />
      </div>
      <div className="contact-map__content">
        <MapGL
          mapStyle="mapbox://styles/mapbox/dark-v9"
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAP_ACCESS_TOKEN}
        >
          {viewport.markerVisible && (
            <Marker
              draggable
              latitude={viewport.latitude}
              longitude={viewport.longitude}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#fff" />
            </Marker>
          )}
        </MapGL>
      </div>
    </div>
  );
};

export default ContactMap;
