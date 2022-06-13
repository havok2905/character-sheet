import { ILocation } from './types';

type IGetLocationResponse = {
  location: ILocation;
};

const getLocation = (id: string): Promise<IGetLocationResponse> => {
  return fetch(`/locations/${id}.json`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { getLocation };
