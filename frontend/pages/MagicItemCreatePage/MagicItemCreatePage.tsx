import React, { ReactElement } from 'react';
import { createMagicItem } from '../../utilities/Api/MagicItems';
import {
  generatePath,
  Link,
  Navigate,
  useNavigate
} from 'react-router-dom';
import { IMagicItem } from '../../types/models';
import { LOGIN_ROUTE, MAGIC_ITEM_ROUTE, MAGIC_ITEMS_ROUTE } from '../../app';
import { MagicItemForm } from '../../components/MagicItemForm/MagicItemForm';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';

const MagicItemCreatePage = (): ReactElement | null => {
  const navigate = useNavigate();

  const {authenticated, loading} = useAuth(() => {});

  if (loading) return null;
  if (!authenticated) return <Navigate replace to={LOGIN_ROUTE} />;

  const handleSubmit = (magicItem: IMagicItem) => {
    createMagicItem({ magicItem })
      .then(data => {
        const id = data.magicItem.id;
        navigate(generatePath(MAGIC_ITEM_ROUTE, { id: id as string }));
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  return (
    <>
      <Navbar authenticated={authenticated}/>
      <div className="layout">
        <div className="full">
          <Link to={MAGIC_ITEMS_ROUTE}>
            Back
          </Link>
          <h1>New Magic Item</h1>
          <MagicItemForm
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Create Magic Item"/>
        </div>
      </div>
    </>
  );
};

export { MagicItemCreatePage };
