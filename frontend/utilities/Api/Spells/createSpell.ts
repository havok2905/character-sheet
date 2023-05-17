import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ISpell } from '../../../types/models';

interface ICreateSpellRequest {
  spell: ISpell;
};

interface ICreateSpellResponse {
  spell: ISpell;
};

const createSpell = async (data: ICreateSpellRequest): Promise<ICreateSpellResponse> => {
  return authenticatedFetch2('/api/spells', {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });
};

export { createSpell };
