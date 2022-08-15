import { authenticatedFetch } from '../authenticatedFetch';

const destroyCharacter = (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch(`/api/characters/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { destroyCharacter };
