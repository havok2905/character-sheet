import { authenticatedFetch } from '../authenticatedFetch';
import { IMagicItem } from '../../../types/models';

type IGetMagicItemsResponse = {
  magicItems: IMagicItem[];
};

const getMagicItems = (): Promise<IGetMagicItemsResponse> => {
  return authenticatedFetch('/api/magic_items', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getMagicItems };
