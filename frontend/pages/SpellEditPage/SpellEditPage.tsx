import React, { ReactElement, useEffect, useState } from 'react';
import { DeleteButton } from '../../components/DeleteButton';
import { destroySpell, getSpell, updateSpell } from '../../utilities/Api/Spells';
import { ISpell } from '../../types/models';
import { SpellForm } from '../../components/SpellForm/SpellForm';
import { useParams } from 'react-router-dom';

const SpellEditPage = (): ReactElement | null => {
  const [spell, setSpell] = useState<ISpell | null>(null);
  
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
        window.location.href = '/spells/';
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/spells/${id}/edit/`;
      });
  };
  
  const handleSubmit = (spell: ISpell) => {
    if (!id) return;

    updateSpell(id, { spell })
      .then(() => {
        window.location.href = `/spells/${id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/spells/${id}`;
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>Edit Spell</h1>
        <a href={`/spells/${id}`}>Back</a>
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
