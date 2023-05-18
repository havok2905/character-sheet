import React, { ReactNode } from 'react';
import { Card } from '../../components/Card';
import { GearIcon } from '../../components/Icons/GearIcon';
import { generatePath, Link, useParams } from 'react-router-dom';
import { getSpell } from '../../utilities/Api/Spells';
import { Navbar } from '../../components/Navbar/Navbar';
import { SpellCard } from '../../components/SpellCard/SpellCard';
import { SPELL_EDIT_ROUTE } from '../../app';
import { useAuth } from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const SpellPage = (): ReactNode => {
  const params = useParams();

  const {isSuccess} = useAuth();
  
  const {
    data,
    isError,
    isLoading
  } = useQuery({
    queryFn: async () => getSpell(params?.id ?? ''),
    queryKey: ['spell']
  });

  if (isLoading || isError) return null;

  const spell = data.spell;

  if (!spell) return null;

  const { id, name } = spell;

  return (
    <>
      <Navbar authenticated={isSuccess}/>
      <div className="layout">
        <div className="full">
          <div className="page-header">
            <div className="page-header-settings">
              {
                isSuccess && (
                  <Link to={generatePath(SPELL_EDIT_ROUTE, { id: id as string })}>
                    <GearIcon/>
                  </Link>
                )
              }
            </div>
          </div>
        </div>
        <div className="full">
          <h1>{name}</h1>
          <Card>
            <SpellCard spell={spell} />
          </Card>
        </div>
      </div>
    </>
  );
};

export { SpellPage };
