import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ICreature } from '../../../types/models';

interface IUpdateCreatureRequest {
  creature: ICreature;
};

interface IUpdateCreatureResponse {
  creature: ICreature;
};

const updateCreature = async (id: string, data: IUpdateCreatureRequest): Promise<IUpdateCreatureResponse> => {
  return authenticatedFetch2(`/api/creatures/${id}`, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT'
  });
};

export { updateCreature };
