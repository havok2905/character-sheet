import { ICreature } from '../../../types/models';

type IUploadCreatureImageResponse = {
  creature: ICreature;
};

const uploadCreatureImage = (id: string, data: FormData): Promise<IUploadCreatureImageResponse> => {
  return fetch(`/api/creatures/${id}/upload_image`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadCreatureImage };
