import { ILocation } from '../../../types/models';

type IGetLocationResponse = {
  location: ILocation;
};

const getLocation = (id: string): Promise<IGetLocationResponse> => {
  return fetch(`/api/locations/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getLocation };
