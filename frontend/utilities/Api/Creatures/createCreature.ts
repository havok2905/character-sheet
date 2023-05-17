import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ICreature } from '../../../types/models';

interface ICreateCreatureRequest {
  creature: ICreature;
};

interface ICreateCreatureResponse {
  creature: ICreature;
};

const createCreature = async (data: ICreateCreatureRequest): Promise<ICreateCreatureResponse> => {
  return authenticatedFetch2('/api/creatures', {
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST'
  });
};

export { createCreature };
