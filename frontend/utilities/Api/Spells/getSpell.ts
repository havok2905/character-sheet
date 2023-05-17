import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ISpell } from '../../../types/models';

interface IGetSpellResponse {
  spell: ISpell;
};

const getSpell = async (id: string): Promise<IGetSpellResponse> => {
  return authenticatedFetch2(`/api/spells/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });
};

export { getSpell };
