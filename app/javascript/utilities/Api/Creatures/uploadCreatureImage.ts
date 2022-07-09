import { ICreature } from '../../../types/models';

type IUploadCreatureImageResponse = {
  creature: ICreature;
};

const uploadCreatureImage = (id: string, data: FormData): Promise<IUploadCreatureImageResponse> => {
  return fetch(`/creatures/${id}/upload_image.json`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadCreatureImage };
