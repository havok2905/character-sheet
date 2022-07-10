import { IMagicItem } from '../../../types/models';

type IUploadMagicItemImageResponse = {
  magicItem: IMagicItem;
};

const uploadMagicItemImage = (id: string, data: FormData): Promise<IUploadMagicItemImageResponse> => {
  return fetch(`/magic_items/${id}/upload_image.json`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadMagicItemImage };
