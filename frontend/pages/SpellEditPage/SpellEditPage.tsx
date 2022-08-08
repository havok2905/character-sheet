import React, { ReactElement, useEffect, useState } from 'react';
import { DeleteButton } from '../../components/DeleteButton';
import { destroySpell, getSpell, updateSpell } from '../../utilities/Api/Spells';
import {
  generatePath,
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';
import { ISpell } from '../../types/models';
import { SpellForm } from '../../components/SpellForm/SpellForm';
import { SPELL_ROUTE, SPELLS_ROUTE } from '../../app';

const SpellEditPage = (): ReactElement | null => {
  const [spell, setSpell] = useState<ISpell | null>(null);
  
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getSpell(params.id).then(data => setSpell(data.spell));
    }
  }, []);

  if (!spell) return null;

  const { id } = spell;

  const handleDelete = () => {
    if (!id) return;

    destroySpell(id)
      .then(() => {
        navigate(SPELLS_ROUTE);
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };
  
  const handleSubmit = (spell: ISpell) => {
    if (!id) return;

    updateSpell(id, { spell })
      .then(() => {
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
        <Link to={generatePath(SPELL_ROUTE, { id })}>
          Back
        </Link>
        <h1>Edit Spell</h1>
        <SpellForm
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Update Spell"
          spell={spell} />
        <DeleteButton
          buttonText="Delete Spell"
          handleDelete={handleDelete}/>
      </div>
    </div>
  );
};

export { SpellEditPage };
