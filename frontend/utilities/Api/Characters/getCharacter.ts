import { authenticatedFetch } from '../authenticatedFetch';
import { ICharacter } from '../../../types/models';

type IGetCharacterResponse = {
  character: ICharacter;
};

const getCharacter = (id: string): Promise<IGetCharacterResponse> => {
  return authenticatedFetch(`/api/characters/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getCharacter };
