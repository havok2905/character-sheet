import React, { useEffect, useState } from 'react';
import { getLocation } from '../../utilities/Api/Locations';
import { Pin } from '../../components/Pin';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const LocationMapSettingsPage = () => {
  const [location, setLocation] = useState(null);
  const [selectedPin, setSelectedPin] = useState(null);

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

  const placePin = e => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    if (selectedPin !== null) {
      const newPins = location.map.pins.map(pin => {
        if (pin.id === selectedPin) {
          return {
            ...pin,
            x,
            y
          };
        } else {
          return {
            ...pin
          };
        }
      });

      setLocation({
        ...location,
        map: {
          ...location.map,
          pins: newPins
        }
      });
    }
  };

  const getMapWithPins = () => {
    const {
      map: {
        imageUrl = '',
        pins = []
      } = {},
      name = ''
    } = location ?? {};

    if (!imageUrl) return null;

    return (
      <div className="map-with-pins">
        <img
          alt={`${name} map`}
          src={imageUrl}
          onClick={placePin}
          width="1000px"/>
        {
          pins.map(p => {
            const { id, x, y } = p;

            return (
              <Pin
                onClick={() => {
                  selectedPin === id ? setSelectedPin(null) : setSelectedPin(id);
                }}
                selected={selectedPin === id}
                x={x}
                y={y}
              />
            );
          })
        }
      </div>
    )
  };

  const getPinActions = () => {
    const currentPin = location?.map?.pins?.find(item => item.id === selectedPin);
    const disabled = !currentPin;

    const { x, y } = currentPin ?? {};

    return (
      <>
        <button
          disabled={disabled}
          onClick={() => { setSelectedPin(null); }}>
          Cancel
        </button>
        <div>
          X:{x} Y:{y}
        </div>
      </>
    )
  };

  const getPinForm = () => {
    const currentPin = location?.map?.pins?.find(item => item.id === selectedPin);
    const disabled = !currentPin;

    return (
      <div>
        <input
          disabled={disabled}
          type="text"
        />
        <button
          disabled={disabled}>
          Save Label
        </button>
      </div>
    );
  };

  return (
    <>
      <div className='layout'>
        <div className='full'>
          <h1>Map Settings</h1>
          <button>Add Pin</button>
          {getMapWithPins()}
          {getPinActions()}
          {getPinForm()}
        </div>
      </div>
    </>
  );
};

export { LocationMapSettingsPage };
