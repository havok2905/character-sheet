import React, { ReactElement } from 'react';
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

const CreatureCreatePage = (): ReactElement | null => {
  const navigate = useNavigate();

  const {authenticated, loading} = useAuth(() => {});

  if (loading) return null;
  if (!authenticated) return <Navigate replace to={LOGIN_ROUTE} />;

  const handleSubmit = (creature: ICreature) => {
    createCreature({ creature })
      .then(data => {
        const id = data.creature.id;
        navigate(generatePath(CREATURE_ROUTE, { id: id as string }));
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
          <Link to={CREATURES_ROUTE}>
            Back
          </Link>
          <h1>New Creature</h1>
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
