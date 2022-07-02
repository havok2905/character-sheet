import { IMagicItem } from '../../../types/models';

type IGetMagicItemsResponse = {
  magicItems: IMagicItem[];
};

const getMagicItems = (): Promise<IGetMagicItemsResponse> => {
  return fetch('/magic_items.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { getMagicItems };
