import { ILocation } from './types';

const uploadLocationSigil = (id: string, data: FormData): Promise<ILocation> => {
  return fetch(`/locations/${id}/upload_sigil.json`, {
    body: data,
    method: 'POST'
  })
  .then(response => response.json())
};

export { uploadLocationSigil };
