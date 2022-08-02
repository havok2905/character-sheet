import { ILocation } from '../../../types/models';

type ICreateLocationRequest = {
  location: {
    content: string;
    description: string;
    name: string;
  };
};

type ICreateLocationResponse = {
  location: ILocation;
};

const createLocation = (data: ICreateLocationRequest): Promise<ICreateLocationResponse> => {
  return fetch('/api/locations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export {
  createLocation,
  ICreateLocationRequest
};
