import { ILocation } from '../../../types/models';

type IUploadLocationMapResponse = {
  location: ILocation;
};

const uploadLocationMap = (id: string, data: FormData): Promise<IUploadLocationMapResponse> => {
  return fetch(`/api/locations/${id}/upload_map`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadLocationMap };
