import { authenticatedFetch } from '../authenticatedFetch';
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
  return authenticatedFetch('/api/locations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export {
  createLocation,
  ICreateLocationRequest
};
