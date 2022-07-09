import { ICreature } from '../../../types/models';

type ICreateCreatureRequest = {
  creature: ICreature;
};

type ICreateCreatureResponse = {
  creature: ICreature;
};

const createCreature = (data: ICreateCreatureRequest): Promise<ICreateCreatureResponse> => {
  return fetch(`/creatures.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export { createCreature };
