import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ISpell } from '../../../types/models';

interface IGetSpellsResponse {
  spells: ISpell[];
};

const getSpells = async (): Promise<IGetSpellsResponse> => {
  return authenticatedFetch2('/api/spells', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });
};

export { getSpells };
