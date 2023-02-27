import React, { ReactElement, useEffect, useState } from 'react';
import { CHARACTER_CREATE_ROUTE } from '../../app';
import { CharactersTable } from '../../components/CharactersTable';
import { getCharacters } from '../../utilities/Api/Characters';
import { ICharacter } from '../../types/models';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';

const CharactersPage = (): ReactElement => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const {authenticated} = useAuth(() => {});

  useEffect(() => {
    getCharacters().then(data => setCharacters(data.characters));
  }, []);

  return (
    <>
      <Navbar authenticated={authenticated}/>
      <div className="layout">
        <div className="full">
          {
            authenticated && (
              <Link
                className="button button-blue"
                to={CHARACTER_CREATE_ROUTE}>
                Create
              </Link>
            )
          }
          <h1>Characters</h1>
          <CharactersTable characters={characters}/>
        </div>
      </div>
    </>
  );
};

export { CharactersPage };
