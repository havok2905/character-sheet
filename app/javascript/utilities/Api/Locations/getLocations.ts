import { ILocation } from './types';

const getLocations = (): Promise<ILocation[]> => {
  return fetch('/locations.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { getLocations };
