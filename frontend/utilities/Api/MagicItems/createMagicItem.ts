import { authenticatedFetch2 } from '../authenticatedFetch2';
import { IMagicItem } from '../../../types/models';

interface ICreateMagicItemRequest {
  magicItem: IMagicItem;
};

interface ICreateMagicItemResponse {
  magicItem: IMagicItem;
};

const createMagicItem = async (data: ICreateMagicItemRequest): Promise<ICreateMagicItemResponse> => {
  return authenticatedFetch2('/api/magic_items', {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });
};

export { createMagicItem };
