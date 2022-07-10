import React, { ReactElement, useEffect, useState } from 'react';
import { getMagicItems } from '../../utilities/Api/MagicItems';
import { IMagicItem } from '../../types/models';
import { Layout } from '../../layouts/Layout';
import { MagicItemsTable } from '../../components/MagicItemsTable';

const MagicItemsPage = (): ReactElement => {
  const [magicItems, setMagicItems] = useState<IMagicItem[]>([]);
  
  useEffect(() => {
    getMagicItems().then(data => setMagicItems(data.magicItems))
  }, []);

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>Magic Items</h1>
          <a href="/magic_items/new">
            Create
          </a>
          <MagicItemsTable magicItems={magicItems}/>
        </div>
      </div>
    </Layout>
  );
};

export { MagicItemsPage };
