import { ILocation } from '../../../types/models';

type IUploadLocationMapResponse = {
  location: ILocation;
};

const uploadLocationMap = (id: string, data: FormData): Promise<IUploadLocationMapResponse> => {
  return fetch(`/locations/${id}/upload_map.json`, {
    body: data,
    method: 'POST'
  })
  .then(response => response.json())
};

export { uploadLocationMap };
