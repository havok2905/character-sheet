import { IFaction } from '../../../types/models';

type ICreateFactionRequest = {
  faction: IFaction;
};

type ICreateFactionResponse = {
  faction: IFaction;
};

const createFaction = (data: ICreateFactionRequest): Promise<ICreateFactionResponse> => {
  return fetch(`/factions.json`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export { createFaction };
