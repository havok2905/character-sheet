import { IFaction } from '../../../types/models';

type IUploadFactionImageResponse = {
  faction: IFaction;
};

const uploadFactionImage = (id: string, data: FormData): Promise<IUploadFactionImageResponse> => {
  return fetch(`/api/factions/${id}/upload_image`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadFactionImage };
