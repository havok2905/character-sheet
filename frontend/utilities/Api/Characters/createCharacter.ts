import { authenticatedFetch } from '../authenticatedFetch';
import { ICharacter } from '../../../types/models';

type ICreateCharacterRequest = {
  character: ICharacter;
};

type ICreateCharacterResponse = {
  character: ICharacter;
};

const createCharacter = (data: ICreateCharacterRequest): Promise<ICreateCharacterResponse> => {
  return authenticatedFetch('/api/characters', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { createCharacter };
