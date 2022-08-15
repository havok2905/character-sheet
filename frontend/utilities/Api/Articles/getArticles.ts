import { authenticatedFetch } from '../authenticatedFetch';
import { IArticle } from '../../../types/models';

type IGetArticlesResponse = {
  articles: IArticle[];
};

const getArticles = (): Promise<IGetArticlesResponse> => {
  return authenticatedFetch('/api/wiki', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getArticles };
