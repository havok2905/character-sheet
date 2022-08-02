import { IFaction } from '../../../types/models';

type IGetFactionResponse = {
  faction: IFaction;
};

const getFaction = (id: string): Promise<IGetFactionResponse> => {
  return fetch(`/api/factions/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getFaction };
