import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ICreature } from '../../../types/models';

interface IGetCreaturesResponse {
  creatures: ICreature[];
};

const getCreatures = async (): Promise<IGetCreaturesResponse> => {
  return authenticatedFetch2('/api/creatures', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET',
  });
};

export { getCreatures };
