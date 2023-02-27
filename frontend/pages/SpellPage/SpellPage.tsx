import React, { ReactElement, useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { GearIcon } from '../../components/Icons/GearIcon';
import { generatePath, Link, useParams } from 'react-router-dom';
import { getSpell } from '../../utilities/Api/Spells';
import { ISpell } from '../../types/models';
import { Navbar } from '../../components/Navbar/Navbar';
import { SpellCard } from '../../components/SpellCard/SpellCard';
import { SPELL_EDIT_ROUTE } from '../../app';
import { useAuth } from '../hooks/useAuth';

const SpellPage = (): ReactElement | null => {
  const [spell, setSpell] = useState<ISpell | null>(null);
  
  const params = useParams();

  const {authenticated} = useAuth(() => {});
  
  useEffect(() => {
    if (params.id) {
      getSpell(params.id).then(data => setSpell(data.spell));
    }
  }, []);

  if (!spell) return null;

  const { id, name } = spell;

  return (
    <>
      <Navbar authenticated={authenticated}/>
      <div className="layout">
        <div className="full">
          <div className="page-header">
            <div className="page-header-settings">
              {
                authenticated && (
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
