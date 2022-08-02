import { IMagicItem } from '../../../types/models';

type IUploadMagicItemImageResponse = {
  magicItem: IMagicItem;
};

const uploadMagicItemImage = (id: string, data: FormData): Promise<IUploadMagicItemImageResponse> => {
  return fetch(`/api/magic_items/${id}/upload_image`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadMagicItemImage };
