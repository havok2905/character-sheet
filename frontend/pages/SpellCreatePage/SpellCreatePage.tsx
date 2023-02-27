import React, { ReactElement } from 'react';
import { createSpell } from '../../utilities/Api/Spells';
import {
  generatePath,
  Link,
  Navigate,
  useNavigate
} from 'react-router-dom';
import { ISpell } from '../../types/models';
import { LOGIN_ROUTE, SPELL_ROUTE, SPELLS_ROUTE } from '../../app';
import { Navbar } from '../../components/Navbar/Navbar';
import { SpellForm } from '../../components/SpellForm/SpellForm';
import { useAuth } from '../hooks/useAuth';

const SpellCreatePage = (): ReactElement | null => {
  const navigate = useNavigate();

  const {authenticated, loading} = useAuth(() => {});

  if (loading) return null;
  if (!authenticated) return <Navigate replace to={LOGIN_ROUTE} />;

  const handleSubmit = (spell: ISpell) => {
    createSpell({ spell })
      .then(data => {
        const id: string = data.spell.id as string;
        navigate(generatePath(SPELL_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  return (
    <>
      <Navbar authenticated={authenticated}/>
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
    </>
  );
};

export { SpellCreatePage };
