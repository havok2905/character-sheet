import { ICharacter } from '../../../types/models';

type ICreateCharacterRequest = {
  character: ICharacter;
};

type ICreateCharacterResponse = {
  character: ICharacter;
};

const createCharacter = (data: ICreateCharacterRequest): Promise<ICreateCharacterResponse> => {
  return fetch(`/characters.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export { createCharacter };
