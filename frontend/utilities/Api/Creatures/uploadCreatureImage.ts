import { authenticatedFetch } from '../authenticatedFetch';
import { ICreature } from '../../../types/models';

type IUploadCreatureImageResponse = {
  creature: ICreature;
};

const uploadCreatureImage = (id: string, data: FormData): Promise<IUploadCreatureImageResponse> => {
  return authenticatedFetch(`/api/creatures/${id}/upload_image`, {
    body: data,
    method: 'POST'
  })
};

export { uploadCreatureImage };
