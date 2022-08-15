import { authenticatedFetch } from '../authenticatedFetch';
import { ICreature } from '../../../types/models';

type IUpdateCreatureRequest = {
  creature: ICreature;
};

type IUpdateCreatureResponse = {
  creature: ICreature;
};

const updateCreature = (id: string, data: IUpdateCreatureRequest): Promise<IUpdateCreatureResponse> => {
  return authenticatedFetch(`/api/creatures/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { updateCreature };
