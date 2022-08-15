import { authenticatedFetch } from '../authenticatedFetch';

const destroyLocation = (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch(`/api/locations/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { destroyLocation };
