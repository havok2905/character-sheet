import React, { FC } from 'react';
import { getSpells } from '../../utilities/Api/Spells';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { SpellsTable } from '../../components/SpellsTable';
import { SPELL_CREATE_ROUTE } from '../../app';
import { useAuth } from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const SpellsPage: FC = () => {

  const {isSuccess} = useAuth();

  const {
    data,
    isError,
    isLoading
  } = useQuery({
    queryFn: getSpells,
    queryKey: ['spells']
  });

  if (isLoading || isError) return null;

  const spells = data.spells;

  return (
    <>
      <Navbar authenticated={isSuccess} />
      <div className="layout">
        <div className="full">
          {
            isSuccess && (
              <Link
                className="button button-primary"
                to={SPELL_CREATE_ROUTE}>
                Create
              </Link>
            )
          }
          <h2>Spells</h2>
          <SpellsTable
            authenticated={isSuccess}
            spells={spells}/>
        </div>
      </div>
    </>
  );
};

export { SpellsPage };
