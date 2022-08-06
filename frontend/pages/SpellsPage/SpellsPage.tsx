import React, { ReactElement, useEffect, useState } from 'react';
import { getSpells } from '../../utilities/Api/Spells';
import { ISpell } from '../../types/models';
import { Link } from 'react-router-dom';
import { SpellsTable } from '../../components/SpellsTable';
import { SPELL_CREATE_ROUTE } from '../../app';

const SpellsPage = (): ReactElement => {
  const [spells, setSpells] = useState<ISpell[]>([]);

  useEffect(() => {
    getSpells().then(data => setSpells(data.spells));
  }, []);

  return (
    <div className="layout">
      <div className="full">
        <h1>Spells</h1>
        <Link to={SPELL_CREATE_ROUTE}>
          Create
        </Link>
        <SpellsTable spells={spells}/>
      </div>
    </div>
  );
};

export { SpellsPage };
