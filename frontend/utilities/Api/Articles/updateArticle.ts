import { authenticatedFetch } from '../authenticatedFetch';
import { IArticle } from '../../../types/models';

type IUpdateArticleRequest = {
  article: IUpdateArticleRequestArticle;
};

type IUpdateArticleRequestArticle = {
  content: string;
  tags: string[];
  title: string;
};

type IUpdateArticleResponse = {
  article: IArticle;
};

const updateArticle = (id: string, data: IUpdateArticleRequest): Promise<IUpdateArticleResponse> => {
  return authenticatedFetch(`/api/wiki/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { updateArticle };
