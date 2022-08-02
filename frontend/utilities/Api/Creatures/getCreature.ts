import { ICreature } from '../../../types/models';

type IGetCreatureResponse = {
  creature: ICreature;
};

const getCreature = (id: string): Promise<IGetCreatureResponse> => {
  return fetch(`/api/creatures/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getCreature };
