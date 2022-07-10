import { ICharacter } from '../../../types/models';

type IGetCharactersResponse = {
  characters: ICharacter[];
};

const getCharacters = (): Promise<IGetCharactersResponse> => {
  return fetch('/characters.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getCharacters };
