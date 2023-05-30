import React, { FC} from 'react';
import { getMagicItems } from '../../utilities/Api/MagicItems';
import { Link } from 'react-router-dom';
import { MagicItemsTable } from '../../components/MagicItemsTable';
import { MAGIC_ITEM_CREATE_ROUTE } from '../../app';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const MagicItemsPage: FC = () => {
  const {isSuccess} = useAuth();

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
      <Navbar authenticated={isSuccess}/>
      <div className="layout">
        <div className="full">
          {
            isSuccess && (
              <Link
                className="button button-blue"
                to={MAGIC_ITEM_CREATE_ROUTE}>
                Create
              </Link>
            )
          }
          <h2>Magic Items</h2>
          <MagicItemsTable magicItems={magicItems}/>
        </div>
      </div>
    </>
  );
};

export { MagicItemsPage };
