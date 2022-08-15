import { authenticatedFetch } from '../authenticatedFetch';

const destroySpell = (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch(`/api/spells/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { destroySpell };
