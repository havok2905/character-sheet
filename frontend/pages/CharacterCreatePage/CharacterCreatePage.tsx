import React, { ReactElement } from 'react';
import {
  CHARACTER_ROUTE,
  CHARACTERS_ROUTE
} from '../../app';
import { createCharacter } from '../../utilities/Api/Characters';
import { CharacterForm } from '../../components/CharacterForm/';
import {
  generatePath,
  Link,
  useNavigate
} from 'react-router-dom';
import { ICharacter } from '../../types/models';

const CharacterCreatePage = (): ReactElement => {
  const navigate = useNavigate();

  const handleSubmit = (character: ICharacter) => {
    createCharacter({ character })
      .then(data => {
        const id = data.character.id;
        navigate(generatePath(CHARACTER_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  return (
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
  );
};

export { CharacterCreatePage };
