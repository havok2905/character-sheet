import React, { ReactElement, useEffect, useState } from 'react';
import { CreaturesTable } from '../../components/CreaturesTable/CreaturesTable';
import { getCreatures } from '../../utilities/Api/Creatures';
import { ICreature } from '../../types/models';
import { CREATURE_CREATE_ROUTE } from '../../app';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';

const CreaturesPage = (): ReactElement => {
  const [creatures, setCreatures] = useState<ICreature[]>([]);

  const {authenticated} = useAuth(() => {});

  useEffect(() => {
    getCreatures().then(data => setCreatures(data.creatures));
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
                to={CREATURE_CREATE_ROUTE}>
                Create
              </Link>
            )
          }
          <h1>Creatures</h1>
          <CreaturesTable creatures={creatures}/>
        </div>
      </div>
    </>
  );
};

export { CreaturesPage };
