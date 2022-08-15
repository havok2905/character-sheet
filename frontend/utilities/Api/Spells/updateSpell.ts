import { authenticatedFetch } from '../authenticatedFetch';
import { ISpell } from '../../../types/models';

type IUpdateSpellRequest = {
  spell: ISpell;
};


type IUpdateSpellResponse = {
  spell: ISpell;
};

const updateSpell = (id: string, data: IUpdateSpellRequest): Promise<IUpdateSpellResponse> => {
  return authenticatedFetch(`/api/spells/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { updateSpell };
