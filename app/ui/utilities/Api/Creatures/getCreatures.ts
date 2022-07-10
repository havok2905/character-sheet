import { ICreature } from '../../../types/models';

type IGetCreaturesResponse = {
  creatures: ICreature[];
};

const getCreatures = (): Promise<IGetCreaturesResponse> => {
  return fetch('/creatures.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getCreatures };
