import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ICharacter } from '../../../types/models';

interface IUpdateCharacterRequest {
  character: ICharacter;
};

interface IUpdateCharacterResponse {
  character: ICharacter;
};

const updateCharacter = async (id: string, data: IUpdateCharacterRequest): Promise<IUpdateCharacterResponse> => {
  return authenticatedFetch2(`/api/characters/${id}`, {
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    method: 'PUT'
  });
};

export { updateCharacter };
