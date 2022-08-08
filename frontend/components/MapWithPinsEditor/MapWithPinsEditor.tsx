import React, {
  ReactElement,
  useEffect,
  useReducer,
  useRef
} from 'react';
import { createPin, destroyPin, updatePin } from '../../utilities/Api/Pins';
import { PinEditModal } from './PinEditModal';
import { PinViewModal } from './PinViewModal';
import {
  ICreature,
  IFaction,
  ILocation,
  IMagicItem,
  IMap,
  IPin
} from '../../types/models';
import { Pin } from '../Pin';
import './_mapWithPinsEditor.scss';

enum MapEditorReducerActionType {
  ADD_NEW_PIN = 'add-new-pin',
  CLOSE_EDIT_MODAL = 'close-edit-modal',
  CLOSE_VIEW_MODAL = 'close-view-modal',
  OPEN_EDIT_MODAL = 'open-edit-modal',
  OPEN_VIEW_MODAL = 'open-view-modal',
  SET_FOCUSED_PIN = 'set-focused-pin',
  SET_PINS = 'set-pins',
  SET_SELECTED_PIN = 'set-selected-pin',
  UPDATE_NEW_PIN = 'update-new-pin'
}

type IMapEditorReducerAction =
  | { type: MapEditorReducerActionType.ADD_NEW_PIN, payload: { pins: IPin[] } }
  | { type: MapEditorReducerActionType.CLOSE_EDIT_MODAL }
  | { type: MapEditorReducerActionType.CLOSE_VIEW_MODAL }
  | { type: MapEditorReducerActionType.OPEN_EDIT_MODAL, payload: { pinId: string } }
  | { type: MapEditorReducerActionType.OPEN_VIEW_MODAL, payload: { pinId: string } }
  | { type: MapEditorReducerActionType.SET_FOCUSED_PIN, payload: { pinId: string } }
  | { type: MapEditorReducerActionType.SET_PINS, payload: { pins: IPin[] } }
  | { type: MapEditorReducerActionType.SET_SELECTED_PIN, payload: { pinId: string } }
  | { type: MapEditorReducerActionType.UPDATE_NEW_PIN, payload: { newPinName: string } };

type IMapEditorReducerState = {
  editModalOpen: boolean;
  editedPinId: string;
  focusedPinId: string;
  newPinName: string;
  selectedPinId: string;
  statefulPins: IPin[];
  viewModalOpen: boolean;
  viewedPinId: string;
};

type IMapWithPinsEditorProps = {
  creatures: ICreature[];
  factions: IFaction[];
  location: ILocation;
  magicItems: IMagicItem[];
  map: IMap;
  resourceName: string;
}

const reducer = (state: IMapEditorReducerState, action: IMapEditorReducerAction) => {
  switch(action.type) {
  case MapEditorReducerActionType.ADD_NEW_PIN:
    return {
      ...state,
      newPinName: '',
      statefulPins: action.payload.pins
    };
  case MapEditorReducerActionType.CLOSE_EDIT_MODAL:
    return {
      ...state,
      editModalOpen: false,
      editedPinId: ''
    };
  case MapEditorReducerActionType.CLOSE_VIEW_MODAL:
    return {
      ...state,
      viewModalOpen: false,
      viewedPinId: ''
    };
  case MapEditorReducerActionType.OPEN_EDIT_MODAL:
    return {
      ...state,
      editModalOpen: true,
      editedPinId: action.payload.pinId
    };
  case MapEditorReducerActionType.OPEN_VIEW_MODAL:
    return {
      ...state,
      viewModalOpen: true,
      viewedPinId: action.payload.pinId
    };
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
  case MapEditorReducerActionType.UPDATE_NEW_PIN:
    return {
      ...state,
      newPinName: action.payload.newPinName
    };
  default:
    return {
      ...state
    };
  }
};

const initialState: IMapEditorReducerState = {
  editModalOpen: false,
  editedPinId: '',
  focusedPinId: '',
  newPinName: '',
  selectedPinId: '',
  statefulPins: [],
  viewModalOpen: false,
  viewedPinId: '',
};

const MapWithPinsEditor = ({
  creatures,
  factions,
  location,
  magicItems,
  map: {
    id,
    imageUrl,
    pins
  } = {
    id: '',
    imageUrl: '',
    pins: []
  },
  resourceName
}: IMapWithPinsEditorProps): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const mapWithPinsRef = useRef<HTMLDivElement>(null);

  const {
    editModalOpen,
    editedPinId,
    focusedPinId,
    newPinName,
    selectedPinId,
    statefulPins,
    viewModalOpen,
    viewedPinId
  } = state;

  useEffect(() => {
    dispatch({
      type: MapEditorReducerActionType.SET_PINS,
      payload: { pins: pins ?? [] }
    });
  }, [pins]);

  const onMouseDown = (pinId: string) => {
    dispatch({
      type: MapEditorReducerActionType.SET_SELECTED_PIN,
      payload: { pinId }
    });
  };

  const onMouseUp = (pinId: string) => {
    dispatch({
      type: MapEditorReducerActionType.SET_SELECTED_PIN,
      payload: { pinId: '' }
    });

    const pin = statefulPins.find(p => p.id === pinId);

    if (!pin) return;

    updatePin(pinId, { pin })
      .then(() => {
        console.log(`Pin ${pinId} was updated`);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const onMouseMove = e => {
    const rect = mapWithPinsRef?.current?.getBoundingClientRect();

    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (selectedPinId === null) return;

    const newPins = statefulPins.map(pin => {
      return pin.id === selectedPinId ? { ...pin, x, y} : { ...pin };
    })

    dispatch({
      type: MapEditorReducerActionType.SET_PINS,
      payload: { pins: newPins }
    });
  };

  const handleTableItemMouseEnter = (id: string) => {
    dispatch({
      type: MapEditorReducerActionType.SET_FOCUSED_PIN,
      payload: { pinId: id }
    });
  };

  const handleTableItemMouseLeave = () => {
    dispatch({
      type: MapEditorReducerActionType.SET_FOCUSED_PIN,
      payload: { pinId: '' }
    });
  };

  const handleAddNewPin = () => {
    if (!id) return;
  
    const pin = {
      mapId: id,
      name: newPinName,
      x: 0,
      y: 0
    };

    createPin({ pin })
      .then(data => {
        dispatch({
          type: MapEditorReducerActionType.ADD_NEW_PIN,
          payload: { pins: [ ...statefulPins, data.pin ]}
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleRemovePin = (pinId: string) => {
    dispatch({
      type: MapEditorReducerActionType.SET_PINS,
      payload: { pins: statefulPins.filter(item => item.id !== pinId ) }
    });

    destroyPin(pinId)
      .then(() => {
        console.log('delete pin');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleViewModalClose = () => {
    dispatch({ type: MapEditorReducerActionType.CLOSE_VIEW_MODAL });
  };

  const handleEditModalClose = () => {
    dispatch({ type: MapEditorReducerActionType.CLOSE_EDIT_MODAL });
  };

  const handleViewModalOpen = (pinId: string) => {
    if (!pinId) return;

    dispatch({
      type: MapEditorReducerActionType.OPEN_VIEW_MODAL,
      payload: { pinId }
    });
  };

  const handleEditModalOpen = (pinId: string) => {
    if (!pinId) return;

    dispatch({
      type: MapEditorReducerActionType.OPEN_EDIT_MODAL,
      payload: { pinId }
    });
  };

  const handleNewPinNameChange = e => {
    dispatch({
      type: MapEditorReducerActionType.UPDATE_NEW_PIN,
      payload: { newPinName: e.target.value }
    });
  };

  const handleEditPinName = e => {
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
  };

  const getEditModal = (): ReactElement | null => {
    if (!editModalOpen) return null;

    const pin = statefulPins.find(item => item.id === editedPinId);

    return pin ? (
      <PinEditModal
        creatures={creatures}
        factions={factions}
        location={location}
        magicItems={magicItems}
        onCloseModal={handleEditModalClose}
        onCloseModalOverlay={handleEditModalClose}
        onEditPinName={handleEditPinName}
        pin={pin} />
    ) : null;
  };

  const getViewModal = (): ReactElement | null => {
    if (!viewModalOpen) return null;

    const pin = statefulPins.find(item => item.id === viewedPinId);

    return pin ? (
      <PinViewModal
        onCloseModal={handleViewModalClose}
        onCloseModalOverlay={handleViewModalClose}
        pin={pin} />
    ) : null;
  };

  return (
    <>
      <input onChange={handleNewPinNameChange} value={newPinName} type="text"/>
      <button onClick={handleAddNewPin}>+</button>
      <div
        className='map-with-pins-editor'
        onMouseMove={onMouseMove}
        ref={mapWithPinsRef}>
        <div className='map-with-pins-image-overlay'/>
        <img
          alt={`${resourceName} map`}
          draggable="false"
          onDragStart={() => false}
          onMouseDown={() => false}
          src={imageUrl}
          width="1000px"/>
        {
          statefulPins.map(pin => {
            return (
              <Pin
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
                pin={pin}
                focused={focusedPinId === pin.id}
                selected={selectedPinId === pin.id}
              />
            );
          })
        }
      </div>
      <table className="map-with-pins-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>X</th>
            <th>Y</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            statefulPins.map(pin => {
              const { id, name, x, y } = pin;

              return (
                <tr
                  onMouseEnter={() => {
                    if (id) handleTableItemMouseEnter(id);
                  }}
                  onMouseLeave={() => {
                    handleTableItemMouseLeave() 
                  }}>
                  <td>{name}</td>
                  <td>{x}</td>
                  <td>{y}</td>
                  <td>
                    <button
                      className="button"
                      onClick={() => {
                        if (id) handleViewModalOpen(id);
                      }}>
                      View
                    </button>
                    <button
                      className="button"
                      onClick={() => {
                        if (id) handleEditModalOpen(id);
                      }}>
                      Edit
                    </button>
                    <button
                      className="button button-red"
                      onClick={() => {
                        if (id) handleRemovePin(id);
                      }}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
      {getEditModal()}
      {getViewModal()}
    </>
  );
};

export { MapWithPinsEditor };
