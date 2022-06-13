import { ILocation } from './types';

type IUpdateLocationRequest = {
  location: IUpdateLocationRequestLocation;
};

type IUpdateLocationRequestLocation = {
  content: string;
  description: string;
  name: string;
};

const updateLocation = (id: string, data: IUpdateLocationRequest): Promise<ILocation> => {
  return fetch(`/locations/${id}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
};

export {
  updateLocation,
  IUpdateLocationRequest
};
