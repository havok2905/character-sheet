import { authenticatedFetch } from '../authenticatedFetch';
import { ILocation } from '../../../types/models';

type IGetLocationsResponse = {
  locations: ILocation[];
};

const getLocations = (): Promise<IGetLocationsResponse> => {
  return authenticatedFetch('/api/locations', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getLocations };
