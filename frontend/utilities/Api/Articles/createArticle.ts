import { authenticatedFetch } from '../authenticatedFetch';
import { IArticle } from '../../../types/models';

type ICreateArticleRequest = {
  article: {
    content: string;
    tags: string[];
    title: string;
  };
};

type ICreateArticleResponse = {
  article: IArticle;
};

const createArticle = (data: ICreateArticleRequest): Promise<ICreateArticleResponse> => {
  return authenticatedFetch('/api/wiki', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export {
  createArticle,
  ICreateArticleRequest
};
