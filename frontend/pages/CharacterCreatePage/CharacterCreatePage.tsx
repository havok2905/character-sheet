import React, { FC } from 'react';
import {
  CHARACTER_ROUTE,
  CHARACTERS_ROUTE,
  LOGIN_ROUTE,
} from '../../app';
import { createCharacter } from '../../utilities/Api/Characters';
import { CharacterForm } from '../../components/CharacterForm/';
import {
  generatePath,
  Link,
  Navigate,
  useNavigate
} from 'react-router-dom';
import { getCreatures } from '../../utilities/Api/Creatures';
import { getSpells } from '../../utilities/Api/Spells';
import { ICharacter } from '../../types/models';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useMutation, useQueries } from '@tanstack/react-query';

const CharacterCreatePage: FC = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    isSuccess
  } = useAuth();

  const results = useQueries({
    queries: [
      {
        queryKey: ['creatures'],
        queryFn: getCreatures
      },
      {
        queryKey: ['spells'],
        queryFn: getSpells
      }
    ]
  });

  const characterCreateMutation = useMutation({
    mutationFn: async (character: ICharacter) => createCharacter({ character }),
    onError: (error) => {
      console.error('Error:', error);
      location.reload();
    },
    onSuccess: (data) => {
      const id = data.character.id ?? '';
      navigate(generatePath(CHARACTER_ROUTE, { id }));
    }
  });

  const [
    creaturesResults,
    spellsResults
  ] = results;

  if (
    isLoading ||
    creaturesResults.isLoading || creaturesResults.isError ||
    spellsResults.isLoading || spellsResults.isError
  ) return null;

  if (!isSuccess) return <Navigate replace to={LOGIN_ROUTE} />;

  const creatures = creaturesResults.data?.creatures ?? [];
  const spells = spellsResults.data?.spells ?? [];

  const handleSubmit = (character: ICharacter) => characterCreateMutation.mutate(character);

  return (
    <>
      <Navbar authenticated={isSuccess}/>
      <div className="layout">
        <div className="full">
          <Link to={CHARACTERS_ROUTE}>
            Back
          </Link>
          <h2>New Character</h2>
          <CharacterForm
            creatures={creatures}
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Create Character"
            spells={spells}
          />
        </div>
      </div>
    </>
  );
};

export { CharacterCreatePage };
