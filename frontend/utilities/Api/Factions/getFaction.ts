import { authenticatedFetch } from '../authenticatedFetch';
import { IFaction } from '../../../types/models';

type IGetFactionResponse = {
  faction: IFaction;
};

const getFaction = (id: string): Promise<IGetFactionResponse> => {
  return authenticatedFetch(`/api/factions/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getFaction };
