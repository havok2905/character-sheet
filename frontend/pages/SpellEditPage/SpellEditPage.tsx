import React, { FC } from 'react';
import { DeleteButton } from '../../components/DeleteButton';
import { destroySpell, getSpell, updateSpell } from '../../utilities/Api/Spells';
import {
  generatePath,
  Link,
  Navigate,
  useNavigate,
  useParams
} from 'react-router-dom';
import { ISpell } from '../../types/models';
import { LOGIN_ROUTE, SPELL_ROUTE, SPELLS_ROUTE } from '../../app';
import { Navbar } from '../../components/Navbar/Navbar';
import { SpellForm } from '../../components/SpellForm/SpellForm';
import { useAuth } from '../hooks/useAuth';
import { useMutation, useQuery } from '@tanstack/react-query';

const SpellEditPage: FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  const authQuery = useAuth();
  
  const {
    data,
    isError,
    isLoading
  } = useQuery({
    queryFn: async () => getSpell(params.id ?? ''),
    queryKey: ['spell']
  });

  const destroySpellMutation = useMutation({
    mutationFn: async (id: string) => destroySpell(id),
    onError: (error) => {
      console.error('Error:', error);
      location.reload();
    },
    onSuccess: () => {
      navigate(SPELLS_ROUTE);
    }
  });

  interface UpdateSpellMutationRequest {
    spell: ISpell;
    id: string;
  }

  const updateSpellMutation = useMutation({
    mutationFn: async ({spell, id}: UpdateSpellMutationRequest) => updateSpell(id, { spell }),
    onError: (error) => {
      console.error('Error:', error);
      navigate(generatePath(SPELL_ROUTE, { id: params.id ?? '' }));
    },
    onSuccess: () => {
      navigate(generatePath(SPELL_ROUTE, { id: params.id ?? '' }));
    }
  });

  if (isLoading || isError) {
    return null;
  }

  if (authQuery.isLoading) return null;

  if (!authQuery.isSuccess) return <Navigate replace to={LOGIN_ROUTE} />;
  
  const spell = data.spell;

  const { id } = spell;

  const handleDelete = () => {
    if (!id) return;
    destroySpellMutation.mutate(id);
  };
  
  const handleSubmit = (spell: ISpell) => {
    if (!id) return;
    updateSpellMutation.mutate({ id, spell });
  };

  return (
    <>
      <Navbar authenticated={authQuery.isSuccess}/>
      <div className="layout">
        <div className="full">
          <Link to={generatePath(SPELL_ROUTE, { id: id as string })}>
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
    </>
  );
};

export { SpellEditPage };
