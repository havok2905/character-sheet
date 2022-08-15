import { authenticatedFetch } from '../authenticatedFetch';

const destroyCreature = (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch(`/api/creatures/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { destroyCreature };
