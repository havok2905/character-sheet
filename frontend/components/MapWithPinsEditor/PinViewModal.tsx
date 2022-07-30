import React, { ReactElement } from 'react';
import { IPin } from '../../types/models';
import { AssociateWithTokenLink } from '../AssociateWithTokenLink';
import { Modal } from '../Modal';

interface IPinViewModalProps {
  onCloseModal: () => void;
  onCloseModalOverlay: () => void;
  pin: IPin;
}

const PinViewModal = ({
  onCloseModal,
  onCloseModalOverlay,
  pin
}: IPinViewModalProps): ReactElement => {
  const {
    creatures = [],
    factions = [],
    id,
    magicItems = [],
    name
  } = pin;
  
  return (
    <Modal
      onCloseModal={onCloseModal}
      onCloseModalOverlay={onCloseModalOverlay}>
      <h2>Edit Map - {id}</h2>
      <p><strong>Name:</strong> {name}</p>
      <h3>Factions</h3>
      {
        factions.map(faction => {
          const {
            id,
            imageUrl,
            name
          } = faction;

          return (
            <AssociateWithTokenLink
              associationUrl={`/factions/${id}`}  
              imageAltText={`${name} token`}
              imageUrl={imageUrl}  
              linkText={name}
            />
          );
        })
      }
      <h3>Creatures</h3>
      {
        creatures.map(creature => {
          const {
            id,
            imageUrl,
            name
          } = creature;

          return (
            <AssociateWithTokenLink
              associationUrl={`/creatures/${id}`}  
              imageAltText={`${name} token`}
              imageUrl={imageUrl}  
              linkText={name}
            />
          );
        })
      }
      <h3>Magic Items</h3>
      {
        magicItems.map(magicItem => {
          const {
            id,
            imageUrl,
            name
          } = magicItem;

          return (
            <AssociateWithTokenLink
              associationUrl={`/magic_items/${id}`}  
              imageAltText={`${name} token`}
              imageUrl={imageUrl}  
              linkText={name}
            />
          );
        })
      }
    </Modal>
  );
};

export { PinViewModal };
