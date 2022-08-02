import { ILocation } from '../../../types/models';

type IUploadLocationSigilResponse = {
  location: ILocation;
};

const uploadLocationSigil = (id: string, data: FormData): Promise<IUploadLocationSigilResponse> => {
  return fetch(`/api/locations/${id}/upload_sigil`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadLocationSigil };
