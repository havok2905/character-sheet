import { ILocation } from './types';

const uploadLocationMap = (id: string, data: FormData): Promise<ILocation> => {
  return fetch(`/locations/${id}/upload_map.json`, {
    body: data,
    method: 'POST'
  })
  .then(response => response.json())
};

export { uploadLocationMap };
