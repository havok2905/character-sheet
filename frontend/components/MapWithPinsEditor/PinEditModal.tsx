import React, { ReactElement, useState } from 'react';
import {
  IFaction,
  ICreature,
  ILocation,
  IMagicItem,
  IPin
} from '../../types/models';
import { Modal } from '../Modal';
import { updatePin } from '../../utilities/Api/Pins';

interface IPinEditModalProps {
  creatures: ICreature[];
  factions: IFaction[];
  location: ILocation;
  magicItems: IMagicItem[];
  onCloseModal: () => void;
  onCloseModalOverlay: () => void;
  onEditPinName: (e: any) => void;
  pin: IPin;
}

const PinEditModal = ({
  creatures,
  factions,
  location,
  magicItems,
  onCloseModal,
  onCloseModalOverlay,
  onEditPinName,
  pin
}: IPinEditModalProps): ReactElement => {
  const [updatedFactionIds, setUpdatedFactionIds] = useState((pin?.factions ?? []).map(faction => String(faction.id)));
  const [updatedCreatureIds, setUpdatedCreatureIds] = useState((pin?.creatures ?? []).map(creature => String(creature.id)));
  const [updatedMagicItemIds, setUpdatedMagicItemIds] = useState((pin?.magicItems ?? []).map(magicItem => String(magicItem.id)));

  const { id, name } = pin;

  const handleEditModalSave = e => {
    e.preventDefault();

    const { id } = pin;

    if (!id) return;

    const updatedPin = {
      ...pin,
      creatureIds: updatedCreatureIds,
      factionIds: updatedFactionIds,
      magicItemIds: updatedMagicItemIds
    };

    updatePin(id, { pin: updatedPin })
      .then(() => {
        onCloseModal();
        window.location.href = `/locations/${location.id}`;
      })
      .catch(error => {
        console.error(error);
      });
  };

  const getEntityTable = (
    baseRoute: string,
    entities: ICreature[] | IFaction[] | IMagicItem[],
    updatedIds: string[],
    setUpdatedIds: (ids: string[]) => void
  ) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>View</th>
            <th>Include</th>
          </tr>
        </thead>
        <tbody>
          {
            entities.map(entity => {
              const { id, name } = entity;

              const checked = updatedIds.includes(String(id));

              return (
                <tr>
                  <td>{name}</td>
                  <td><a href={`${baseRoute}/${id}`}>View</a></td>
                  <td>
                    <input
                      checked={checked}
                      onChange={() => {
                        const stringId = String(id);
                        if (updatedIds.includes(stringId)) {
                          const data = [...updatedIds].filter(entityId => entityId !== stringId);
                          setUpdatedIds(data);
                        } else {
                          const data = [...updatedIds, stringId];
                          setUpdatedIds(data);
                        }
                      }}
                      type="checkbox"
                      value={id}/>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  };

  return (
    <Modal
      onCloseModal={onCloseModal}
      onCloseModalOverlay={onCloseModalOverlay}>
      <h2>Edit Map - {name}, {id}</h2>
      <form>
        <button onClick={handleEditModalSave} type="button">
          Save
        </button>
        <fieldset>
          <label>Name</label>
          <input
            onChange={onEditPinName}
            type="text"
            value={name} />
        </fieldset>
      </form>
      <h3>Factions</h3>
      {getEntityTable('/factions', factions, updatedFactionIds, setUpdatedFactionIds)}
      <h3>Creatures</h3>
      {getEntityTable('/creatures', creatures, updatedCreatureIds, setUpdatedCreatureIds)}
      <h3>Magic Items</h3>
      {getEntityTable('/magic_items', magicItems, updatedMagicItemIds, setUpdatedMagicItemIds)}
    </Modal>
  );
};

export { PinEditModal };
