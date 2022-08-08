import React, { ReactElement } from 'react';
import { createFaction } from '../../utilities/Api/Factions';
import {
  FACTION_ROUTE,
  FACTIONS_ROUTE
} from '../../app';
import { FactionForm } from '../../components/FactionForm';
import {
  generatePath,
  Link,
  useNavigate
} from 'react-router-dom';
import { IFaction } from '../../types/models';

const FactionCreatePage = (): ReactElement => {
  const navigate = useNavigate();

  const handleSubmit = (faction: IFaction) => {
    createFaction({ faction })
      .then(data => {
        const id = data.faction.id;
        navigate(generatePath(FACTION_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <Link to={FACTIONS_ROUTE}>
          Back
        </Link>
        <h1>New Faction</h1>
        <FactionForm
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Create Faction"/>
      </div>
    </div>
  );
};

export { FactionCreatePage };
