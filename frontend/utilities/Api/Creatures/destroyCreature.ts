import { authenticatedFetch2 } from '../authenticatedFetch2';

const destroyCreature = async (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch2(`/api/creatures/${id}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE',
  });
};

export { destroyCreature };
