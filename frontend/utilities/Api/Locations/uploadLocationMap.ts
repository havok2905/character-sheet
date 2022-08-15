import { authenticatedFetch } from '../authenticatedFetch';
import { ILocation } from '../../../types/models';

type IUploadLocationMapResponse = {
  location: ILocation;
};

const uploadLocationMap = (id: string, data: FormData): Promise<IUploadLocationMapResponse> => {
  return authenticatedFetch(`/api/locations/${id}/upload_map`, {
    body: data,
    method: 'POST'
  })
};

export { uploadLocationMap };
