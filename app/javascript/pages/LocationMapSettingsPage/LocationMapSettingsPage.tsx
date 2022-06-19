import React, { useEffect, useReducer, useRef, useState } from 'react';
import { getLocation } from '../../utilities/Api/Locations';
import { Pin } from '../../components/Pin';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

interface MapWithPinsPinProps {
  id: string;
  name: string;
  x: number;
  y: number;
}

interface MapWithPinsProps {
  imageUrl: string;
  pins: MapWithPinsPinProps[];
  resourceName: string;
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'reset':
      return {
        selectedPin: null,
        statefulPins: action.payload.pins
      }
    case 'set-pins':
      return {
        ...state,
        statefulPins: action.payload.pins
      };
    case 'set-selected-pin':
      return {
        ...state,
        selectedPin: action.payload.selectedPin
      };
    default:
      return {
        ...state
      };
  }
};

const initialState = {
  selectedPin: null,
  statefulPins: [],
};

const MapWithPins = ({
  imageUrl,
  pins,
  resourceName
}: MapWithPinsProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const mapWithPinsRef = useRef(null);

  const { selectedPin, statefulPins } = state;

  useEffect(() => {
    dispatch({ type: 'set-pins', payload: { pins: pins ?? [] } });
  }, [pins]);

  const onMouseDown = pinId => {
    dispatch({
      type: 'set-selected-pin',
      payload: { selectedPin: pinId }
    });
  };

  const onMouseUp = _pinId => {
    dispatch({
      type: 'set-selected-pin',
      payload: { selectedPin: null }
    });
  };

  const onMouseMove = e => {
    var rect = mapWithPinsRef.current.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    if (selectedPin === null) return;

    const newPins = statefulPins.map(pin => {
      return pin.id === selectedPin ? { ...pin, x, y} : { ...pin };
    })

    dispatch({
      type: 'set-pins',
      payload: { pins: newPins }
    });
  };

  const handleReset = () => {
    dispatch({
      type: 'reset',
      payload: { pins }
    });
  };

  const handleSave = () => {
    const pinsToSave = statefulPins.map(pin => {
      const { id, map_id, x, y } = pin;
      
      return {
        id,
        map_id,
        x: Math.round(x),
        y: Math.round(y)
      }
    });

    console.log('pinsToSave', pinsToSave);
  };

  const getPins = () => {
    return statefulPins.map(pin => {
      return (
        <Pin
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          pin={pin}
          selected={selectedPin === pin.id}
        />
      );
    });
  };

  return (
    <>
      <div
        className='map-with-pins'
        onMouseMove={onMouseMove}
        ref={mapWithPinsRef}>
        <img
          alt={`${resourceName} map`}
          draggable="false"
          onDragStart={() => false}
          onMouseDown={() => false}
          src={imageUrl}
          width="1000px"/>
        {getPins()}
      </div>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSave}>Save</button>
    </>
  );
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
          <MapWithPins
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
