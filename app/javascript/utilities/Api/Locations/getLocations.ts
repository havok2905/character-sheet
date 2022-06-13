import { ILocation } from './types';

type IGetLocationsResponse = {
  locations: ILocation[];
};

const getLocations = (): Promise<IGetLocationsResponse> => {
  return fetch('/locations.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { getLocations };
