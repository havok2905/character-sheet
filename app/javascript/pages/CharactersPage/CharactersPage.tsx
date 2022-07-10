import React, { ReactElement, useEffect, useState } from 'react';
import { CharactersTable } from '../../components/CharactersTable';
import { getCharacters } from '../../utilities/Api/Characters';
import { ICharacter } from '../../types/models';
import { Layout } from '../../layouts/Layout';

const CharactersPage = (): ReactElement => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    getCharacters().then(data => setCharacters(data.characters));
  }, []);

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>Characters</h1>
          <a href="/characters/new">
            Create
          </a>
          <CharactersTable characters={characters}/>
        </div>
      </div>
    </Layout>
  );
};

export { CharactersPage };
