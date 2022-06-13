import { ILocation } from './types';

const getLocation = (id: string): Promise<ILocation> => {
  return fetch(`/locations/${id}.json`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { getLocation };
