import { IMagicItem } from '../../../types/models';

type IGetMagicItemResponse = {
  magicItem: IMagicItem;
};

const getMagicItem = (id: string): Promise<IGetMagicItemResponse> => {
  return fetch(`/api/magic_items/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getMagicItem };
