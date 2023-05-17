import { authenticatedFetch2 } from '../authenticatedFetch2';

const destroyCharacter = async (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch2(`/api/characters/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { destroyCharacter };
