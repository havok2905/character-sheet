import React, { ReactElement, useEffect, useState } from 'react';
import { GearIcon } from '../../components/Icons/GearIcon';
import { getSpell } from '../../utilities/Api/Spells';
import { ISpell } from '../../types/models';
import { Layout } from '../../layouts/Layout';
import { SpellCard } from '../../components/SpellCard/SpellCard';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const SpellPage = (): ReactElement | null => {
  const [spell, setSpell] = useState<ISpell | null>(null);

  useEffect(() => {
    const id = getIdFromUrl();
    getSpell(id).then(data => setSpell(data.spell));
  }, []);

  if (!spell) return null;

  const { id, name } = spell;

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <div className="page-header">
            <div className="page-header-settings">
              <a href={`/spells/${id}/edit`}>
                <GearIcon/>
              </a>
            </div>
          </div>
        </div>
        <div className="full">
          <h1>{name}</h1>
          <SpellCard spell={spell} />
        </div>
      </div>
    </Layout>
  );
};

export { SpellPage };
