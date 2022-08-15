import { authenticatedFetch } from '../authenticatedFetch';
import { IFaction } from '../../../types/models';

type IUploadFactionImageResponse = {
  faction: IFaction;
};

const uploadFactionImage = (id: string, data: FormData): Promise<IUploadFactionImageResponse> => {
  return authenticatedFetch(`/api/factions/${id}/upload_image`, {
    body: data,
    method: 'POST'
  })
};

export { uploadFactionImage };
