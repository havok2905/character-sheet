import React, { ReactElement, useEffect, useState } from 'react';
import { getMagicItems } from '../../utilities/Api/MagicItems';
import { IMagicItem } from '../../types/models';
import { Link } from 'react-router-dom';
import { MagicItemsTable } from '../../components/MagicItemsTable';
import { LOCATION_CREATE_ROUTE } from '../../app';

const MagicItemsPage = (): ReactElement => {
  const [magicItems, setMagicItems] = useState<IMagicItem[]>([]);
  
  useEffect(() => {
    getMagicItems().then(data => setMagicItems(data.magicItems))
  }, []);

  return (
    <div className="layout">
      <div className="full">
        <Link
          className="button button-blue"
          to={LOCATION_CREATE_ROUTE}>
          Create
        </Link>
        <h1>Magic Items</h1>
        <MagicItemsTable magicItems={magicItems}/>
      </div>
    </div>
  );
};

export { MagicItemsPage };
