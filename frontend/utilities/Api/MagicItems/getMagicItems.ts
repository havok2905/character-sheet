import { authenticatedFetch2 } from '../authenticatedFetch2';
import { IMagicItem } from '../../../types/models';

interface IGetMagicItemsResponse {
  magicItems: IMagicItem[];
};

const getMagicItems = async (): Promise<IGetMagicItemsResponse> => {
  return authenticatedFetch2('/api/magic_items', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });
};

export { getMagicItems };
