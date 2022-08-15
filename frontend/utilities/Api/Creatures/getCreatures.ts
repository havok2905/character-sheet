import { authenticatedFetch } from '../authenticatedFetch';
import { ICreature } from '../../../types/models';

type IGetCreaturesResponse = {
  creatures: ICreature[];
};

const getCreatures = (): Promise<IGetCreaturesResponse> => {
  return authenticatedFetch('/api/creatures', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getCreatures };
