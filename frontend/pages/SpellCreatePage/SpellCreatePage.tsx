import React, { ReactElement } from 'react';
import { createSpell } from '../../utilities/Api/Spells';
import {
  generatePath,
  Link,
  useNavigate
} from 'react-router-dom';
import { ISpell } from '../../types/models';
import { SpellForm } from '../../components/SpellForm/SpellForm';
import { SPELL_ROUTE, SPELLS_ROUTE } from '../../app';

const SpellCreatePage = (): ReactElement => {
  const navigate = useNavigate();

  const handleSubmit = (spell: ISpell) => {
    createSpell({ spell })
      .then(data => {
        const id = data.spell.id;
        navigate(generatePath(SPELL_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <Link to={SPELLS_ROUTE}>
          Back
        </Link>
        <h1>New Spell</h1>
        <SpellForm
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Create Spell"/>
      </div>
    </div>
  );
};

export { SpellCreatePage };
