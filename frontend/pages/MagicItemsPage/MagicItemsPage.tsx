import React, { ReactElement, useEffect, useState } from 'react';
import { getMagicItems } from '../../utilities/Api/MagicItems';
import { IMagicItem } from '../../types/models';
import { Link } from 'react-router-dom';
import { MagicItemsTable } from '../../components/MagicItemsTable';
import { MAGIC_ITEM_CREATE_ROUTE } from '../../app';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';

const MagicItemsPage = (): ReactElement => {
  const [magicItems, setMagicItems] = useState<IMagicItem[]>([]);
  
  const {authenticated} = useAuth(() => {});

  useEffect(() => {
    getMagicItems().then(data => setMagicItems(data.magicItems))
  }, []);

  return (
    <>
      <Navbar authenticated={authenticated}/>
      <div className="layout">
        <div className="full">
          {
            authenticated && (
              <Link
                className="button button-blue"
                to={MAGIC_ITEM_CREATE_ROUTE}>
                Create
              </Link>
            )
          }
          <h1>Magic Items</h1>
          <MagicItemsTable magicItems={magicItems}/>
        </div>
      </div>
    </>
  );
};

export { MagicItemsPage };
