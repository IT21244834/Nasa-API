// LocationMarker.jsx
import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import locationIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ lat, lng, onClick }) => {
  return (
    <div className='location-marker' onClick={onClick}>
      <Icon icon={locationIcon} className='location-icon' />
    </div>
  );
};

export default LocationMarker;
