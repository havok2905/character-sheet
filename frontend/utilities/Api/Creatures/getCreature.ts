import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ICreature } from '../../../types/models';

type IGetCreatureResponse = {
  creature: ICreature;
};

const getCreature = async (id: string): Promise<IGetCreatureResponse> => {
  return authenticatedFetch2(`/api/creatures/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });
};

export { getCreature };
