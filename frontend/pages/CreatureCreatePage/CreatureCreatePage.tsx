import React, { FC } from 'react';
import {
  CREATURE_ROUTE,
  CREATURES_ROUTE,
  LOGIN_ROUTE
} from '../../app';
import { createCreature } from '../../utilities/Api/Creatures';
import { CreatureForm } from '../../components/CreatureForm/CreatureForm';
import {
  generatePath,
  Link,
  Navigate,
  useNavigate
} from 'react-router-dom';
import { ICreature } from '../../types/models';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useMutation } from '@tanstack/react-query';

const CreatureCreatePage: FC = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    isSuccess
  } = useAuth();

  const creatureCreateMutation = useMutation({
    mutationFn: async (creature: ICreature) => createCreature({ creature }),
    onError: (error) => {
      console.error('Error:', error);
      location.reload();
    },
    onSuccess: (data) => {
     const id = data.creature.id ?? '';
     navigate(generatePath(CREATURE_ROUTE, { id }));
    }
  });

  if (isLoading) return null;

  if (!isSuccess) return <Navigate replace to={LOGIN_ROUTE} />;

  const handleSubmit = (creature: ICreature) => creatureCreateMutation.mutate(creature);

  return (
    <>
      <Navbar authenticated={isSuccess}/>
      <div className="layout">
        <div className="full">
          <Link to={CREATURES_ROUTE}>
            Back
          </Link>
          <h2>New Creature</h2>
          <CreatureForm
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Create Creature"
          />
        </div>
      </div>
    </>
  );
};

export { CreatureCreatePage };
