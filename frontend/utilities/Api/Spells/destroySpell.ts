import { authenticatedFetch2 } from '../authenticatedFetch2';

const destroySpell = async (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch2(`/api/spells/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE'
  });
};

export { destroySpell };
