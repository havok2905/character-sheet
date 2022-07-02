import { IFaction } from '../../../types/models';

type IGetFactionsResponse = {
  factions: IFaction[];
};

const getFactions = (): Promise<IGetFactionsResponse> => {
  return fetch('/factions.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { getFactions };
