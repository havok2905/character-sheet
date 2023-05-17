import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ICharacter } from '../../../types/models';

interface ICreateCharacterRequest {
  character: ICharacter;
};

interface ICreateCharacterResponse {
  character: ICharacter;
};

const createCharacter = (data: ICreateCharacterRequest): Promise<ICreateCharacterResponse> => {
  return authenticatedFetch2('/api/characters', {
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  });
};

export { createCharacter };
