import { authenticatedFetch } from '../authenticatedFetch';
import { ISpell } from '../../../types/models';

type ICreateSpellRequest = {
  spell: ISpell;
};


type ICreateSpellResponse = {
  spell: ISpell;
};

const createSpell = (data: ICreateSpellRequest): Promise<ICreateSpellResponse> => {
  return authenticatedFetch('/api/spells', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { createSpell };
