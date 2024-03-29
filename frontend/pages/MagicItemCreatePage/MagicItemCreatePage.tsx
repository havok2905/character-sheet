import React, { FC } from 'react';
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
import { useMutation } from '@tanstack/react-query';

const MagicItemCreatePage: FC = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    isSuccess
  } = useAuth();

  const magicItemCreateMutation = useMutation({
    mutationFn: async (magicItem: IMagicItem) => createMagicItem({ magicItem }),
    onError: (error) => {
      console.error('Error:', error);
      location.reload();
    },
    onSuccess: (data) => {
     const id = data.magicItem.id ?? '';
     navigate(generatePath(MAGIC_ITEM_ROUTE, { id }));
    }
  });

  if (isLoading) return null;

  if (!isSuccess) return <Navigate replace to={LOGIN_ROUTE} />;

  const handleSubmit = (magicItem: IMagicItem) => magicItemCreateMutation.mutate(magicItem);

  return (
    <>
      <Navbar authenticated={isSuccess}/>
      <div className="layout">
        <div className="full">
          <Link to={MAGIC_ITEMS_ROUTE}>
            Back
          </Link>
          <h2>New Magic Item</h2>
          <MagicItemForm
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Create Magic Item"/>
        </div>
      </div>
    </>
  );
};

export { MagicItemCreatePage };
