import { authenticatedFetch } from '../authenticatedFetch';
import { ILocation } from '../../../types/models';

type IUploadLocationSigilResponse = {
  location: ILocation;
};

const uploadLocationSigil = (id: string, data: FormData): Promise<IUploadLocationSigilResponse> => {
  return authenticatedFetch(`/api/locations/${id}/upload_sigil`, {
    body: data,
    method: 'POST'
  })
};

export { uploadLocationSigil };
