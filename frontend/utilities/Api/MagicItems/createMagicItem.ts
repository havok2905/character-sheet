import { authenticatedFetch } from '../authenticatedFetch';
import { IMagicItem } from '../../../types/models';

type ICreateMagicItemRequest = {
  magicItem: IMagicItem;
};

type ICreateMagicItemResponse = {
  magicItem: IMagicItem;
};

const createMagicItem = (data: ICreateMagicItemRequest): Promise<ICreateMagicItemResponse> => {
  return authenticatedFetch('/api/magic_items', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { createMagicItem };
