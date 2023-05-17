import React, { ReactNode} from 'react';
import { getMagicItems } from '../../utilities/Api/MagicItems';
import { Link } from 'react-router-dom';
import { MagicItemsTable } from '../../components/MagicItemsTable';
import { MAGIC_ITEM_CREATE_ROUTE } from '../../app';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MagicItemsPage = (): ReactNode => {
  const {authenticated} = useAuth(() => {});

  const {
    data,
    isError,
    isLoading
  } = useQuery({
    queryFn: getMagicItems,
    queryKey: ['magic-items']
  });

  if (isError || isLoading) return null;

  const magicItems = data.magicItems;
  
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
