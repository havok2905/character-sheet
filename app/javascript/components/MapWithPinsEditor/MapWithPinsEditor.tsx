import React, {
  ReactElement,
  useContext,
  useEffect,
  useReducer,
  useRef
} from 'react';
import { createPin, destroyPin, updatePin } from '../../utilities/Api/Pins';
import { Modal } from '../Modal';
import { IMap, IPin } from '../../types/models';
import { Pin } from '../Pin';
import { ToastCollectionContext } from '../ToastCollection';
import { ToastCollectionErrorTypes } from '../../types/toasts';

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

  const { add } = useContext(ToastCollectionContext);

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
        add(ToastCollectionErrorTypes.INFO, `Pin ${pinId} was updated`);
      })
      .catch(() => {
        add(ToastCollectionErrorTypes.ERROR, `There was an issue updated pin ${pinId}`);
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
      map_id: id,
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

        add(ToastCollectionErrorTypes.INFO, `Pin was created`);
      })
      .catch(() => {
        add(ToastCollectionErrorTypes.ERROR, `There was an issue creating this pin`);
      });
  };

  const handleRemovePin = (pinId: string) => {
    dispatch({
      type: MapEditorReducerActionType.SET_PINS,
      payload: { pins: statefulPins.filter(item => item.id !== pinId ) }
    });

    destroyPin(pinId)
      .then(() => {
        add(ToastCollectionErrorTypes.INFO, `Pin ${pinId} was deleted`);
      })
      .catch(() => {
        add(ToastCollectionErrorTypes.ERROR, `There was an issue deleting pin, ${pinId}`);
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

  const handleEditModalSave = (pin: IPin) => {
    const pinId = pin.id;

    if (!pinId) return;

    updatePin(pinId, { pin })
      .then(() => {
        handleEditModalClose();
        add(ToastCollectionErrorTypes.INFO, `Pin ${pinId} was updated`);
      })
      .catch(() => {
        add(ToastCollectionErrorTypes.ERROR, `There was an issue updated pin ${pinId}`);
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

    if (!pin) return null;

    const { name } = pin;

    return (
      <Modal
        onCloseModal={handleEditModalClose}
        onCloseModalOverlay={handleEditModalClose}>
          <h2>Edit Map - {editedPinId}</h2>
          <form>
            <fieldset>
              <label>Name</label>
              <input
                onChange={handleEditPinName}
                type="text"
                value={name} />
            </fieldset>
          </form>
          <h3>Factions</h3>
          <h3>NPCs</h3>
          <h3>Creatures</h3>
          <h3>Magic Items</h3>
          <button onClick={() => { handleEditModalSave(pin) }}>Save</button>
      </Modal>
    );
  };

  const getViewModal = (): ReactElement | null => {
    if (!viewModalOpen) return null;

    const pin = statefulPins.find(item => item.id === viewedPinId);

    if (!pin) return null;

    const { name } = pin;

    return (
      <Modal
        onCloseModal={handleViewModalClose}
        onCloseModalOverlay={handleViewModalClose}>
          <h2>Edit Map - {viewedPinId}</h2>
          <p><strong>Name:</strong> {name}</p>
          <h3>Factions</h3>
          <h3>NPCs</h3>
          <h3>Creatures</h3>
          <h3>Magic Items</h3>
      </Modal>
    );
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
            <th>Id</th>
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
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>{x}</td>
                  <td>{y}</td>
                  <td>
                    <button onClick={() => {
                      if (id) handleViewModalOpen(id);
                    }}>
                      View
                    </button>
                    <button onClick={() => {
                      if (id) handleEditModalOpen(id);
                    }}>
                      Edit
                    </button>
                    <button onClick={() => {
                      if (id) handleRemovePin(id);
                    }}>Delete</button>
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
