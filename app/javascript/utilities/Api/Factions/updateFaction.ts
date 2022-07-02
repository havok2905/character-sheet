import { IFaction } from '../../../types/models';

type IUpdateFactionRequest = {
  faction: IFaction;
};

type IUpdateFactionResponse = {
  faction: IFaction;
};

const updateFaction = (id: string, data: IUpdateFactionRequest): Promise<IUpdateFactionResponse> => {
  return fetch(`/factions/${id}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
};

export { updateFaction };
