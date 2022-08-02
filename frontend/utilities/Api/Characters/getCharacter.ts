import { ICharacter } from '../../../types/models';

type IGetCharacterResponse = {
  character: ICharacter;
};

const getCharacter = (id: string): Promise<IGetCharacterResponse> => {
  return fetch(`/api/characters/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getCharacter };
