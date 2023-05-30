import React, { FC } from 'react';
import { CHARACTER_CREATE_ROUTE } from '../../app';
import { CharactersTable } from '../../components/CharactersTable';
import { getCharacters } from '../../utilities/Api/Characters';
import { ICharacter } from '../../types/models';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const CharactersPage: FC = () => {
  const authQuery = useAuth();

  const {
    data, 
    isError,
    isLoading
  } = useQuery<{characters: ICharacter[]}>({
    queryKey: ['characters'],
    queryFn: getCharacters,
    retry: 3
  });

  if(isLoading || isError) {
    return null;
  }

  const characters = data?.characters;

  return (
    <>
      <Navbar authenticated={authQuery.isSuccess}/>
      <div className="layout">
        <div className="full">
          {
            authQuery.isSuccess && (
              <Link
                className="button button-blue"
                to={CHARACTER_CREATE_ROUTE}>
                Create
              </Link>
            )
          }
          <h2>Characters</h2>
          <CharactersTable characters={characters}/>
        </div>
      </div>
    </>
  );
};

export { CharactersPage };
