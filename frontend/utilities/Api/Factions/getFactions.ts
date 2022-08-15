import { authenticatedFetch } from '../authenticatedFetch';
import { IFaction } from '../../../types/models';

type IGetFactionsResponse = {
  factions: IFaction[];
};

const getFactions = (): Promise<IGetFactionsResponse> => {
  return authenticatedFetch('/api/factions', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getFactions };
