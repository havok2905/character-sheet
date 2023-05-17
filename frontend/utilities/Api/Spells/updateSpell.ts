import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ISpell } from '../../../types/models';

interface IUpdateSpellRequest {
  spell: ISpell;
};

interface IUpdateSpellResponse {
  spell: ISpell;
};

const updateSpell = async (id: string, data: IUpdateSpellRequest): Promise<IUpdateSpellResponse> => {
  return authenticatedFetch2(`/api/spells/${id}`, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT'
  });
};

export { updateSpell };
