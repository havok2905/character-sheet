import React, {
  ReactElement,
  useEffect,
  useReducer,
  useRef
} from 'react';
import { IPin } from '../types/models';
import { Pin } from '../Pin';

enum MapEditorReducerActionType {
  RESET = 'reset',
  SET_PINS = 'set-pins',
  SET_SELECTED_PIN = 'set-selected-pin'
}

type IMapEditorReducerAction =
  | { type: MapEditorReducerActionType.RESET, payload: { pins: IPin[] } }
  | { type: MapEditorReducerActionType.SET_PINS, payload: { pins: IPin[] } }
  | { type: MapEditorReducerActionType.SET_SELECTED_PIN, payload: { selectedPin: string } };

type IMapEditorReducerState = {
  selectedPin: string;
  statefulPins: IPin[];
};

type IMapWithPinsEditorProps = {
  imageUrl: string;
  pins: IPin[];
  resourceName: string;
}

const reducer = (state: IMapEditorReducerState, action: IMapEditorReducerAction) => {
  switch(action.type) {
    case 'reset':
      return {
        selectedPin: '',
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

const initialState: IMapEditorReducerState = {
  selectedPin: '',
  statefulPins: [],
};

const MapWithPinsEditor = ({
  imageUrl,
  pins,
  resourceName
}: IMapWithPinsEditorProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const mapWithPinsRef = useRef(null);

  const { selectedPin, statefulPins } = state;

  useEffect(() => {
    dispatch({
      type: MapEditorReducerActionType.SET_PINS,
      payload: { pins: pins ?? [] }
    });
  }, [pins]);

  const onMouseDown = pinId => {
    dispatch({
      type: MapEditorReducerActionType.SET_SELECTED_PIN,
      payload: { selectedPin: pinId }
    });
  };

  const onMouseUp = _pinId => {
    dispatch({
      type: MapEditorReducerActionType.SET_SELECTED_PIN,
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
      type: MapEditorReducerActionType.SET_PINS,
      payload: { pins: newPins }
    });
  };

  const handleReset = () => {
    dispatch({
      type: MapEditorReducerActionType.RESET,
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

export { MapWithPinsEditor };
