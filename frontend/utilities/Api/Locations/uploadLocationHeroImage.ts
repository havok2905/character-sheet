import { authenticatedFetch } from '../authenticatedFetch';
import { ILocation } from '../../../types/models';

type IUploadLocationHeroImageResponse = {
  location: ILocation;
};

const uploadLocationHeroImage = (id: string, data: FormData): Promise<IUploadLocationHeroImageResponse> => {
  return authenticatedFetch(`/api/locations/${id}/upload_hero_image`, {
    body: data,
    method: 'POST'
  })
};

export { uploadLocationHeroImage };
