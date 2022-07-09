import { IFaction } from '../../../types/models';

type IUploadFactionImageResponse = {
  faction: IFaction;
};

const uploadFactionImage = (id: string, data: FormData): Promise<IUploadFactionImageResponse> => {
  return fetch(`/factions/${id}/upload_image.json`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadFactionImage };
