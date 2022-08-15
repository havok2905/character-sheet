import { authenticatedFetch } from '../authenticatedFetch';
import { IMagicItem } from '../../../types/models';

type IGetMagicItemResponse = {
  magicItem: IMagicItem;
};

const getMagicItem = (id: string): Promise<IGetMagicItemResponse> => {
  return authenticatedFetch(`/api/magic_items/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getMagicItem };
