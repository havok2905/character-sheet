import { authenticatedFetch } from '../authenticatedFetch';

const destroyPin = (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch(`/api/pins/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { destroyPin };
