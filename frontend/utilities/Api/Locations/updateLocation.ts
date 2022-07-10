import { ILocation } from '../../../types/models';

type IUpdateLocationRequest = {
  location: IUpdateLocationRequestLocation;
};

type IUpdateLocationRequestLocation = {
  content: string;
  description: string;
  name: string;
};

type IUpdateLocationsResponse = {
  location: ILocation;
};

const updateLocation = (id: string, data: IUpdateLocationRequest): Promise<IUpdateLocationsResponse> => {
  return fetch(`/locations/${id}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export { updateLocation };
