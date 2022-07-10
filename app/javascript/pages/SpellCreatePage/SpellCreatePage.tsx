import React, { ReactElement } from 'react';
import { createSpell } from '../../utilities/Api/Spells';
import { ISpell } from '../../types/models';
import { Layout } from '../../layouts/Layout';
import { SpellForm } from '../../components/SpellForm/SpellForm';

const SpellCreatePage = (): ReactElement => {
  const handleSubmit = (spell: ISpell) => {
    createSpell({ spell })
      .then(data => {
        window.location.href = `/spells/${data.spell.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = '/spells/new';
      });
  };

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>New Spell</h1>
          <a href="/spells">Back</a>
          <SpellForm
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Create Spell"/>
        </div>
      </div>
    </Layout>
  );
};

export { SpellCreatePage };
