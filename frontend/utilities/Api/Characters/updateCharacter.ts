import { ICharacter } from '../../../types/models';

type IUpdateCharacterRequest = {
  character: ICharacter;
};

type IUpdateCharacterResponse = {
  character: ICharacter;
};

const updateCharacter = (id: string, data: IUpdateCharacterRequest): Promise<IUpdateCharacterResponse> => {
  return fetch(`/api/characters/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export { updateCharacter };
