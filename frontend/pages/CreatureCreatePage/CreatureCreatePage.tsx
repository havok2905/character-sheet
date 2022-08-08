import React, { ReactElement } from 'react';
import {
  CREATURE_ROUTE,
  CREATURES_ROUTE
} from '../../app';
import { createCreature } from '../../utilities/Api/Creatures';
import { CreatureForm } from '../../components/CreatureForm/CreatureForm';
import {
  generatePath,
  Link,
  useNavigate
} from 'react-router-dom';
import { ICreature } from '../../types/models';

const CreatureCreatePage = (): ReactElement => {
  const navigate = useNavigate();

  const handleSubmit = (creature: ICreature) => {
    createCreature({ creature })
      .then(data => {
        const id = data.creature.id;
        navigate(generatePath(CREATURE_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  return (
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
  );
};

export { CreatureCreatePage };
