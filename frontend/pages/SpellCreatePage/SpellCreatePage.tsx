import React, { FC } from 'react';
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
import { useMutation } from '@tanstack/react-query';

const SpellCreatePage: FC = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    isSuccess
  } = useAuth();
  
  const spellCreateMutation = useMutation({
    mutationFn: async (spell: ISpell) => createSpell({ spell }),
    onError: (error) => {
      console.error('Error:', error);
      location.reload();
    },
    onSuccess: (data) => {
     const id = data.spell.id ?? '';
     navigate(generatePath(SPELL_ROUTE, { id }));
    }
  });

  if (isLoading) return null;
  
  if (!isSuccess) return <Navigate replace to={LOGIN_ROUTE} />;

  const handleSubmit = (spell: ISpell) => spellCreateMutation.mutate(spell);

  return (
    <>
      <Navbar authenticated={isSuccess}/>
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
