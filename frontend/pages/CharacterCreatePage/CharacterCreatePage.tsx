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
import { ICharacter } from '../../types/models';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useMutation } from '@tanstack/react-query';

const CharacterCreatePage: FC = () => {
  const navigate = useNavigate();

  const {
    isLoading,
    isSuccess
  } = useAuth();

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

  if (isLoading) return null;

  if (!isSuccess) return <Navigate replace to={LOGIN_ROUTE} />;

  const handleSubmit = (character: ICharacter) => characterCreateMutation.mutate(character);

  return (
    <>
      <Navbar authenticated={isSuccess}/>
      <div className="layout">
        <div className="full">
          <Link to={CHARACTERS_ROUTE}>
            Back
          </Link>
          <h1>New Character</h1>
          <CharacterForm
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Create Character"
          />
        </div>
      </div>
    </>
  );
};

export { CharacterCreatePage };
