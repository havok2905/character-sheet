import { authenticatedFetch2 } from '../authenticatedFetch2';
import { IMagicItem } from '../../../types/models';

interface IGetMagicItemResponse {
  magicItem: IMagicItem;
};

const getMagicItem = async (id: string): Promise<IGetMagicItemResponse> => {
  return authenticatedFetch2(`/api/magic_items/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });
};

export { getMagicItem };
