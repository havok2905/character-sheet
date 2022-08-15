import { authenticatedFetch } from '../authenticatedFetch';
import { ISpell } from '../../../types/models';

type IGetSpellsResponse = {
  spells: ISpell[];
};

const getSpells = (): Promise<IGetSpellsResponse> => {
  return authenticatedFetch('/api/spells', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getSpells };
