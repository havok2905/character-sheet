import { authenticatedFetch } from '../authenticatedFetch';
import { IMagicItem } from '../../../types/models';

type IUpdateMagicItemRequest = {
  magicItem: IMagicItem;
};

type IUpdateMagicItemResponse = {
  magicItem: IMagicItem;
};

const updateMagicItem = (id: string, data: IUpdateMagicItemRequest): Promise<IUpdateMagicItemResponse> => {
  return authenticatedFetch(`/api/magic_items/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { updateMagicItem };
