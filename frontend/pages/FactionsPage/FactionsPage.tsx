import React, { ReactElement, useEffect, useState } from 'react';
import {
  FACTION_ROUTE,
  FACTION_CREATE_ROUTE
} from '../../app';
import { generatePath, Link } from 'react-router-dom';
import { getFactions } from '../../utilities/Api/Factions';
import { IFaction } from '../../types/models';
import { ItemWithToken } from '../../components/ItemWithToken';

const FactionsPage = (): ReactElement => {
  const [factions, setFactions] = useState<IFaction[]>([]);

  useEffect(() => {
    getFactions().then(data => setFactions(data.factions));
  }, []);

  return (
    <div className="layout">
      <div className="full">
        <Link
          className="button button-blue"
          to={FACTION_CREATE_ROUTE}>
          Create
        </Link>
        <h1>Factions</h1>
        <ul className="bulletless-list">
          {
            factions.map(faction => {
              const {
                alignment,
                id,
                imageUrl,
                name
              } = faction;
              
              return (
                <li>
                  <ItemWithToken
                    description={alignment}
                    heading={name}
                    imageUrl={imageUrl}
                    imageAltText={`${name} token`}
                    itemPath={generatePath(FACTION_ROUTE, { id })}/>
                </li>
              );
            })
          }
        </ul>
      </div>
    </div>
  )
};

export { FactionsPage };
