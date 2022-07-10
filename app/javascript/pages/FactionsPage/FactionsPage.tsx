import React, { ReactElement, useEffect, useState } from 'react';
import { getFactions } from '../../utilities/Api/Factions';
import { IFaction } from '../../types/models';
import { ItemWithToken } from '../../components/ItemWithToken';
import { Layout } from '../../layouts/Layout';

const FactionsPage = (): ReactElement => {
  const [factions, setFactions] = useState<IFaction[]>([]);

  useEffect(() => {
    getFactions().then(data => setFactions(data.factions));
  }, []);

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>Factions</h1>
          <a href="/factions/new">
            Create
          </a>
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
                      itemPath={`/factions/${id}`}
                    />
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </Layout>
  )
};

export { FactionsPage };
