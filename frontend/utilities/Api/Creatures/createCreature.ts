import { authenticatedFetch } from '../authenticatedFetch';
import { ICreature } from '../../../types/models';

type ICreateCreatureRequest = {
  creature: ICreature;
};

type ICreateCreatureResponse = {
  creature: ICreature;
};

const createCreature = (data: ICreateCreatureRequest): Promise<ICreateCreatureResponse> => {
  return authenticatedFetch('/api/creatures', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { createCreature };
