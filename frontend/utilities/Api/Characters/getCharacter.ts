import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ICharacter } from '../../../types/models';

interface IGetCharacterResponse {
  character: ICharacter;
};

const getCharacter = async (id: string): Promise<IGetCharacterResponse> => {
  return authenticatedFetch2(`/api/characters/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });
};

export { getCharacter };
