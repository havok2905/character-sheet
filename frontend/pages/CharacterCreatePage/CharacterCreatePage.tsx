import React, { ReactElement } from 'react';
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

const CharacterCreatePage = (): ReactElement | null => {
  const navigate = useNavigate();

  const {authenticated, loading} = useAuth(() => {});

  if (loading) return null;
  if (!authenticated) return <Navigate replace to={LOGIN_ROUTE} />;

  const handleSubmit = (character: ICharacter) => {
    createCharacter({ character })
      .then(data => {
        const id = data.character.id;
        navigate(generatePath(CHARACTER_ROUTE, { id: id as string }));
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
