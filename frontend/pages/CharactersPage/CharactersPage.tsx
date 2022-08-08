import React, { ReactElement, useEffect, useState } from 'react';
import { CHARACTER_CREATE_ROUTE } from '../../app';
import { CharactersTable } from '../../components/CharactersTable';
import { getCharacters } from '../../utilities/Api/Characters';
import { ICharacter } from '../../types/models';
import { Link } from 'react-router-dom';

const CharactersPage = (): ReactElement => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    getCharacters().then(data => setCharacters(data.characters));
  }, []);

  return (
    <div className="layout">
      <div className="full">
        <Link
          className="button button-blue"
          to={CHARACTER_CREATE_ROUTE}>
          Create
        </Link>
        <h1>Characters</h1>
        <CharactersTable characters={characters}/>
      </div>
    </div>
  );
};

export { CharactersPage };
