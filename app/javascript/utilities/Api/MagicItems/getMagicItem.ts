import { IMagicItem } from '../../../types/models';

type IGetMagicItemResponse = {
  magicItem: IMagicItem;
};

const getMagicItem = (id: string): Promise<IGetMagicItemResponse> => {
  return fetch(`/magic_items/${id}.json`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json());
};

export { getMagicItem };
