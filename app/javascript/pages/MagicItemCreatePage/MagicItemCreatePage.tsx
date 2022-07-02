import React, { ReactElement } from 'react';
import { createMagicItem } from '../../utilities/Api/MagicItems';
import { IMagicItem } from '../../types/models';
import { MagicItemForm } from '../../components/MagicItemForm/MagicItemForm';

const MagicItemCreatePage = (): ReactElement => {
  const handleSubmit = (magicItem: IMagicItem) => {
    createMagicItem({ magicItem })
      .then(data => {
        window.location.href = `/magic_items/${data.magicItem.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/magic_items/new`;
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>New Magic Item</h1>
        <a className="button" href="/magic_items">Back</a>
        <MagicItemForm
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Create Magic Item"/>
      </div>
    </div>
  );
};

export { MagicItemCreatePage };
