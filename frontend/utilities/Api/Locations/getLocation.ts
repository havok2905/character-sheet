import { authenticatedFetch } from '../authenticatedFetch';
import { ILocation } from '../../../types/models';

type IGetLocationResponse = {
  location: ILocation;
};

const getLocation = (id: string): Promise<IGetLocationResponse> => {
  return authenticatedFetch(`/api/locations/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getLocation };
