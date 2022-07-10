import React, { ReactElement, useEffect, useState } from 'react';
import { destroySpell, getSpell, updateSpell } from '../../utilities/Api/Spells';
import { ISpell } from '../../types/models';
import { Layout } from '../../layouts/Layout';
import { SpellForm } from '../../components/SpellForm/SpellForm';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

const SpellEditPage = (): ReactElement | null => {
  const [spell, setSpell] = useState<ISpell | null>(null);

  useEffect(() => {
    const id = getIdFromUrl();
    getSpell(id).then(data => setSpell(data.spell));
  }, []);

  if (!spell) return null;

  const { id } = spell;

  const handleDelete = e => {
    e.preventDefault();

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
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>Edit Spell</h1>
          <a href={`/spells/${id}`}>Back</a>
          <SpellForm
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Update Spell"
            spell={spell} />
          <button onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </Layout>
  );
};

export { SpellEditPage };
