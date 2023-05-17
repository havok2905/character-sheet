import React, { ReactNode } from 'react';
import { CHARACTER_CREATE_ROUTE } from '../../app';
import { CharactersTable } from '../../components/CharactersTable';
import { getCharacters } from '../../utilities/Api/Characters';
import { ICharacter } from '../../types/models';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const CharactersPage = (): ReactNode => {
  const {authenticated} = useAuth(() => {});

  const {
    data, 
    isError,
    isLoading
  } = useQuery<{characters: ICharacter[]}>({
    queryKey: ['characters'],
    queryFn: getCharacters,
    retry: 3
  });

  const characters = data?.characters ?? [];

  if(isLoading || isError || !characters.length) {
    return null;
  }

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
