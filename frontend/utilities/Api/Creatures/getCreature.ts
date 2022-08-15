import { authenticatedFetch } from '../authenticatedFetch';
import { ICreature } from '../../../types/models';

type IGetCreatureResponse = {
  creature: ICreature;
};

const getCreature = (id: string): Promise<IGetCreatureResponse> => {
  return authenticatedFetch(`/api/creatures/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getCreature };
