import { authenticatedFetch } from '../authenticatedFetch';

const destroyArticle = (id: string): Promise<Record<string, never>> => {
  return authenticatedFetch(`/api/wiki/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { destroyArticle };
