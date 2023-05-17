import { authenticatedFetch2 } from '../authenticatedFetch2';

const destroyMagicItem = async (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch2(`/api/magic_items/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  });
};

export { destroyMagicItem };
