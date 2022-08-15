import { authenticatedFetch } from '../authenticatedFetch';
import { IArticle } from '../../../types/models';

type IGetArticleResponse = {
  article: IArticle;
};

const getArticle = (id: string): Promise<IGetArticleResponse> => {
  return authenticatedFetch(`/api/wiki/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getArticle };
