import { authenticatedFetch } from '../authenticatedFetch';

const destroyFaction = (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch(`/api/factions/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { destroyFaction };
