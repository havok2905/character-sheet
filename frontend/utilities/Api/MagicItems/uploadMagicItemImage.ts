import { authenticatedFetch2 } from '../authenticatedFetch2';
import { IMagicItem } from '../../../types/models';

interface IUploadMagicItemImageResponse {
  magicItem: IMagicItem;
};

const uploadMagicItemImage = async (id: string, data: FormData): Promise<IUploadMagicItemImageResponse> => {
  return authenticatedFetch2(`/api/magic_items/${id}/upload_image`, {
    body: data,
    method: 'POST'
  })
};

export { uploadMagicItemImage };
