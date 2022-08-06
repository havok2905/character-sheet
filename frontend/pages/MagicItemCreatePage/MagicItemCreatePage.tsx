import React, { ReactElement } from 'react';
import { createMagicItem } from '../../utilities/Api/MagicItems';
import {
  generatePath,
  Link,
  useNavigate
} from 'react-router-dom';
import { IMagicItem } from '../../types/models';
import { MagicItemForm } from '../../components/MagicItemForm/MagicItemForm';
import { MAGIC_ITEM_ROUTE, MAGIC_ITEMS_ROUTE } from '../../app';

const MagicItemCreatePage = (): ReactElement => {
  const navigate = useNavigate();

  const handleSubmit = (magicItem: IMagicItem) => {
    createMagicItem({ magicItem })
      .then(data => {
        const id = data.magicItem.id;
        navigate(generatePath(MAGIC_ITEM_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>New Magic Item</h1>
        <Link to={MAGIC_ITEMS_ROUTE}>
          Back
        </Link>
        <MagicItemForm
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Create Magic Item"/>
      </div>
    </div>
  );
};

export { MagicItemCreatePage };
