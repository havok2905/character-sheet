import { authenticatedFetch } from '../authenticatedFetch';
import { IFaction } from '../../../types/models';

type IUpdateFactionRequest = {
  faction: IFaction;
};

type IUpdateFactionResponse = {
  faction: IFaction;
};

const updateFaction = (id: string, data: IUpdateFactionRequest): Promise<IUpdateFactionResponse> => {
  return authenticatedFetch(`/api/factions/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { updateFaction };
