import { authenticatedFetch } from '../authenticatedFetch';
import { IMagicItem } from '../../../types/models';

type IUploadMagicItemImageResponse = {
  magicItem: IMagicItem;
};

const uploadMagicItemImage = (id: string, data: FormData): Promise<IUploadMagicItemImageResponse> => {
  return authenticatedFetch(`/api/magic_items/${id}/upload_image`, {
    body: data,
    method: 'POST'
  })
};

export { uploadMagicItemImage };
