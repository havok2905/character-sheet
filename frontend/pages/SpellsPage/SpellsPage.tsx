import React, { ReactElement, useEffect, useState } from 'react';
import { getSpells } from '../../utilities/Api/Spells';
import { ISpell } from '../../types/models';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { SpellsTable } from '../../components/SpellsTable';
import { SPELL_CREATE_ROUTE } from '../../app';
import { useAuth } from '../hooks/useAuth';

const SpellsPage = (): ReactElement => {
  const [spells, setSpells] = useState<ISpell[]>([]);

  const {authenticated} = useAuth(() => {});

  useEffect(() => {
    getSpells().then(data => setSpells(data.spells));
  }, []);

  return (
    <>
      <Navbar authenticated={authenticated} />
      <div className="layout">
        <div className="full">
          {
            authenticated && (
              <Link
                className="button button-blue"
                to={SPELL_CREATE_ROUTE}>
                Create
              </Link>
            )
          }
          <h1>Spells</h1>
          <SpellsTable
            authenticated={authenticated}
            spells={spells}/>
        </div>
      </div>
    </>
  );
};

export { SpellsPage };
