import { authenticatedFetch } from '../authenticatedFetch';
import { ICharacter } from '../../../types/models';

type IGetCharactersResponse = {
  characters: ICharacter[];
};

const getCharacters = (): Promise<IGetCharactersResponse> => {
  return authenticatedFetch('/api/characters', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getCharacters };
