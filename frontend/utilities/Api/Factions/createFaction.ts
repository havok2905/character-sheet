import { authenticatedFetch } from '../authenticatedFetch';
import { IFaction } from '../../../types/models';

type ICreateFactionRequest = {
  faction: IFaction;
};

type ICreateFactionResponse = {
  faction: IFaction;
};

const createFaction = (data: ICreateFactionRequest): Promise<ICreateFactionResponse> => {
  return authenticatedFetch('/api/factions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { createFaction };
