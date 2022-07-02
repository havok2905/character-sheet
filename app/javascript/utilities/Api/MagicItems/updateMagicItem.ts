import { IMagicItem } from '../../../types/models';

type IUpdateMagicItemRequest = {
  magicItem: IMagicItem;
};

type IUpdateMagicItemResponse = {
  magicItem: IMagicItem;
};

const updateMagicItem = (id: string, data: IUpdateMagicItemRequest): Promise<IUpdateMagicItemResponse> => {
  return fetch(`/magic_items/${id}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
};

export { updateMagicItem };
