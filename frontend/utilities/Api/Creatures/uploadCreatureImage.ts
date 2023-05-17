import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ICreature } from '../../../types/models';

interface IUploadCreatureImageResponse {
  creature: ICreature;
};

const uploadCreatureImage = async (id: string, data: FormData): Promise<IUploadCreatureImageResponse> => {
  return authenticatedFetch2(`/api/creatures/${id}/upload_image`, {
    body: data,
    method: 'POST'
  });
};

export { uploadCreatureImage };
