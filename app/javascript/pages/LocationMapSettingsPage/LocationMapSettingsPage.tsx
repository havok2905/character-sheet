import React, { useEffect, useState } from 'react';
import { getLocation } from '../../utilities/Api/Locations';
import { MapWithPinsEditor } from '../../components/MapWithPinsEditor';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const LocationMapSettingsPage = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const id = getIdFromUrl();

    getLocation(id)
      .then(data => {
        setLocation(data.location);
      })
      .catch((error) => {
        console.error('Error:', error);
      });    
  }, []);

  const {
    map: {
      imageUrl = '',
      pins = []
    } = {},
    name = ''
  } = location ?? {};

  return (
    <>
      <div className='layout'>
        <div className='full'>
          <h1>Map Settings</h1>
          <MapWithPinsEditor
            imageUrl={imageUrl}
            pins={pins}
            resourceName={name}
          />
        </div>
      </div>
    </>
  );
};

export { LocationMapSettingsPage };
