import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from '../components/LocationMarker';

const WildFire = ({ center, zoom }) => {
  const NATURAL_EVENT_WILDFIRE = 8;

  const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map((ev, index) => {
      if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
        return (
          <LocationMarker
            key={index}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
          />
        );
      }
      return null;
    });

    return (
      <div className='map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB4TI19wJpXMfkOGAb2kWZjrfYwCmEDTTQ' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {markers}
        </GoogleMapReact>
      </div>
    );
  };

  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Map eventData={eventData} center={center} zoom={zoom} />
    </div>
  );
};

WildFire.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default WildFire;
