import React, {
  ReactElement,
  useEffect,
  useReducer,
  useRef
} from 'react';
import { IPin } from '../../types/models';
import { Pin } from '../Pin';

enum MapEditorReducerActionType {
  CLOSE_MODAL = 'close-modal',
  OPEN_MODAL = 'open-modal',
  RESET = 'reset',
  SET_FOCUSED_PIN = 'set-focused-pin',
  SET_PINS = 'set-pins',
  SET_SELECTED_PIN = 'set-selected-pin'
}

type IMapEditorReducerAction =
  | { type: MapEditorReducerActionType.CLOSE_MODAL }
  | { type: MapEditorReducerActionType.OPEN_MODAL, payload: { pinId: string } }
  | { type: MapEditorReducerActionType.RESET, payload: { pins: IPin[] } }
  | { type: MapEditorReducerActionType.SET_FOCUSED_PIN, payload: { pinId: string } }
  | { type: MapEditorReducerActionType.SET_PINS, payload: { pins: IPin[] } }
  | { type: MapEditorReducerActionType.SET_SELECTED_PIN, payload: { pinId: string } };

type IMapEditorReducerState = {
  editedPinId: string;
  focusedPinId: string;
  modalOpen: boolean;
  selectedPinId: string;
  statefulPins: IPin[];
};

type IMapWithPinsEditorProps = {
  imageUrl: string;
  pins: IPin[];
  resourceName: string;
}

const reducer = (state: IMapEditorReducerState, action: IMapEditorReducerAction) => {
  switch(action.type) {
    case MapEditorReducerActionType.CLOSE_MODAL:
      return {
        ...state,
        editedPinId: '',
        modalOpen: false
      }
    case MapEditorReducerActionType.OPEN_MODAL:
      return {
        ...state,
        editedPinId: action.payload.pinId,
        modalOpen: true
      }
    case MapEditorReducerActionType.RESET:
      return {
        editedPinId: '',
        focusedPinId: '',
        modalOpen: false,
        selectedPinId: '',
        statefulPins: action.payload.pins
      }
    case MapEditorReducerActionType.SET_FOCUSED_PIN:
      return {
        ...state,
        focusedPinId: action.payload.pinId
      };
    case MapEditorReducerActionType.SET_PINS:
      return {
        ...state,
        statefulPins: action.payload.pins
      };
    case MapEditorReducerActionType.SET_SELECTED_PIN:
      return {
        ...state,
        selectedPinId: action.payload.pinId
      };
    default:
      return {
        ...state
      };
  }
};

const initialState: IMapEditorReducerState = {
  editedPinId: '',
  focusedPinId: '',
  modalOpen: false,
  selectedPinId: '',
  statefulPins: [],
};

const MapWithPinsEditor = ({
  imageUrl,
  pins,
  resourceName
}: IMapWithPinsEditorProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const mapWithPinsRef = useRef(null);

  const {
    editedPinId,
    focusedPinId,
    modalOpen,
    selectedPinId,
    statefulPins
  } = state;

  useEffect(() => {
    dispatch({
      type: MapEditorReducerActionType.SET_PINS,
      payload: { pins: pins ?? [] }
    });
  }, [pins]);

  const onMouseDown = pinId => {
    dispatch({
      type: MapEditorReducerActionType.SET_SELECTED_PIN,
      payload: { pinId }
    });
  };

  const onMouseUp = _pinId => {
    dispatch({
      type: MapEditorReducerActionType.SET_SELECTED_PIN,
      payload: { pinId: '' }
    });
  };

  const onMouseMove = e => {
    var rect = mapWithPinsRef.current.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    if (selectedPinId === null) return;

    const newPins = statefulPins.map(pin => {
      return pin.id === selectedPinId ? { ...pin, x, y} : { ...pin };
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
          focused={focusedPinId === pin.id}
          selected={selectedPinId === pin.id}
        />
      );
    });
  };

  const handleSideBarItemMouseEnter = (id: string) => {
    dispatch({
      type: MapEditorReducerActionType.SET_FOCUSED_PIN,
      payload: { pinId: id }
    });
  };

  const handleSideBarItemMouseLeave = () => {
    dispatch({
      type: MapEditorReducerActionType.SET_FOCUSED_PIN,
      payload: { pinId: '' }
    });
  };

  const getSidebarItems = () => {
    return statefulPins.map(pin => {
      const { id, name, x, y } = pin;

      return (
        <div
          className='map-with-pins-sidebar-item'
          onMouseEnter={() => { handleSideBarItemMouseEnter(id) } }
          onMouseLeave={() => { handleSideBarItemMouseLeave() } }
        >
          <p><strong>Name:</strong> {name}</p>
          <p><strong>X:</strong> {x} <strong>Y:</strong> {y}</p>
          <button onClick={() => {
            dispatch({
              type: MapEditorReducerActionType.OPEN_MODAL,
              payload: { pinId: id }
            });
          }}>
            Edit
          </button>
        </div>
      );
    });
  };

  const getModal = () => {
    if (!modalOpen) return null;

    const handleClose = () => {
      dispatch({ type: MapEditorReducerActionType.CLOSE_MODAL });
    };

    const pin = statefulPins.find(item => item.id === editedPinId);

    const { name } = pin;

    return (
      <>
        <div className='modal'>
          <button onClick={handleClose}>
            Close
          </button>
          <h2>Edit Map - {editedPinId}</h2>
          <form>
            <fieldset>
              <label>Name</label>
              <input
                onChange={e => {
                  dispatch({
                    type: MapEditorReducerActionType.SET_PINS,
                    payload: {
                      pins: statefulPins.map(item => {
                        if (item.id === editedPinId) {
                          return { ...item, name: e.target.value }
                        } else {
                          return { ...item };
                        }
                      })
                    }
                  })
                }}
                type="text"
                value={name}
              />
            </fieldset>
          </form>
          <h3>Factions</h3>
          <h3>NPCs</h3>
          <h3>Creatures</h3>
          <h3>Magic Items</h3>
        </div>
        <div
          className='modal-overlay'
          onClick={handleClose}
        />
      </>
    );
  };

  return (
    <>
      <div className='map-with-pins-editor'>
        <div className='map-with-pins-sidebar'>
          <h2>Pins</h2>
          {getSidebarItems()}
        </div>
        <div className='map-with-pins-content'>
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
        </div>
      </div>
      {getModal()}
    </>
  );
};

export { MapWithPinsEditor };
