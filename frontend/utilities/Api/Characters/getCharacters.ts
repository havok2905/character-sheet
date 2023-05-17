import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ICharacter } from '../../../types/models';

interface IGetCharactersResponse {
  characters: ICharacter[];
};

const getCharacters = async (): Promise<IGetCharactersResponse> => {
  return authenticatedFetch2('/api/characters', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });
};

export { getCharacters };
