import { authenticatedFetch } from '../authenticatedFetch';
import { ISpell } from '../../../types/models';

type IGetSpellResponse = {
  spell: ISpell;
};

const getSpell = (id: string): Promise<IGetSpellResponse> => {
  return authenticatedFetch(`/api/spells/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getSpell };
