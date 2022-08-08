import React, { ReactElement, useEffect, useState } from 'react';
import { CreaturesTable } from '../../components/CreaturesTable/CreaturesTable';
import { getCreatures } from '../../utilities/Api/Creatures';
import { ICreature } from '../../types/models';
import { CREATURE_CREATE_ROUTE } from '../../app';
import { Link } from 'react-router-dom';

const CreaturesPage = (): ReactElement => {
  const [creatures, setCreatures] = useState<ICreature[]>([]);

  useEffect(() => {
    getCreatures().then(data => setCreatures(data.creatures));
  }, []);

  return (
    <div className="layout">
      <div className="full">
        <Link
          className="button button-blue"
          to={CREATURE_CREATE_ROUTE}>
          Create
        </Link>
        <h1>Creatures</h1>
        <CreaturesTable creatures={creatures}/>
      </div>
    </div>
  );
};

export { CreaturesPage };
