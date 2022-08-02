import { ILocation } from '../../../types/models';

type IUploadLocationHeroImageResponse = {
  location: ILocation;
};

const uploadLocationHeroImage = (id: string, data: FormData): Promise<IUploadLocationHeroImageResponse> => {
  return fetch(`/api/locations/${id}/upload_hero_image`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadLocationHeroImage };
