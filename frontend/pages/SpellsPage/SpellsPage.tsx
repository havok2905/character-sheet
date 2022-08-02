import React, { ReactElement, useEffect, useState } from 'react';
import { getSpells } from '../../utilities/Api/Spells';
import { ISpell } from '../../types/models';
import { SpellsTable } from '../../components/SpellsTable';

const SpellsPage = (): ReactElement => {
  const [spells, setSpells] = useState<ISpell[]>([]);

  useEffect(() => {
    getSpells().then(data => setSpells(data.spells));
  }, []);

  return (
    <div className="layout">
      <div className="full">
        <h1>Spells</h1>
        <a href="/spells/new">
          Create
        </a>
        <SpellsTable spells={spells}/>
      </div>
    </div>
  );
};

export { SpellsPage };
