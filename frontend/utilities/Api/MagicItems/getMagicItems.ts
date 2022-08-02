import { IMagicItem } from '../../../types/models';

type IGetMagicItemsResponse = {
  magicItems: IMagicItem[];
};

const getMagicItems = (): Promise<IGetMagicItemsResponse> => {
  return fetch('/api/magic_items', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getMagicItems };
