import React, { ReactElement, useEffect, useState } from 'react';
import { GearIcon } from '../../components/Icons/GearIcon';
import { getSpell } from '../../utilities/Api/Spells';
import { ISpell } from '../../types/models';
import { SpellCard } from '../../components/SpellCard/SpellCard';
import { useParams } from "react-router-dom";

const SpellPage = (): ReactElement | null => {
  const [spell, setSpell] = useState<ISpell | null>(null);
  
  const params = useParams();
  
  useEffect(() => {
    if (params.id) {
      getSpell(params.id).then(data => setSpell(data.spell));
    }
  }, []);

  if (!spell) return null;

  const { id, name } = spell;

  return (
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
  );
};

export { SpellPage };
