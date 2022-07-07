import { ICreature } from '../../../types/models';

type IUpdateCreatureRequest = {
  creature: ICreature;
};

type IUpdateCreatureResponse = {
  creature: ICreature;
};

const updateCreature = (id: string, data: IUpdateCreatureRequest): Promise<IUpdateCreatureResponse> => {
  return fetch(`/creatures/${id}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
};

export { updateCreature };
