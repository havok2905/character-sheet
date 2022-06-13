import { ILocation } from './types';

type ICreateLocationRequest = {
  location: ICreateLocationRequestLocation;
};

type ICreateLocationRequestLocation = {
  content: string;
  description: string;
  name: string;
};

const createLocation = (data: ICreateLocationRequest): Promise<ILocation> => {
  return fetch('/locations.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
};

export {
  createLocation,
  ICreateLocationRequest
};
