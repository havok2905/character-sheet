import { authenticatedFetch } from '../authenticatedFetch';

const destroyMagicItem = (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch(`/api/magic_items/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { destroyMagicItem };
