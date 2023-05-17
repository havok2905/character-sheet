import { authenticatedFetch2 } from '../authenticatedFetch2';
import { IMagicItem } from '../../../types/models';

interface IUpdateMagicItemRequest {
  magicItem: IMagicItem;
};

interface IUpdateMagicItemResponse {
  magicItem: IMagicItem;
};

const updateMagicItem = async (id: string, data: IUpdateMagicItemRequest): Promise<IUpdateMagicItemResponse> => {
  return authenticatedFetch2(`/api/magic_items/${id}`, {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT'
  });
};

export { updateMagicItem };
