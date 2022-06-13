import { ILocation } from './types';

type IUploadLocationSigilResponse = {
  location: ILocation;
};

const uploadLocationSigil = (id: string, data: FormData): Promise<IUploadLocationSigilResponse> => {
  return fetch(`/locations/${id}/upload_sigil.json`, {
    body: data,
    method: 'POST'
  })
  .then(response => response.json())
};

export { uploadLocationSigil };
