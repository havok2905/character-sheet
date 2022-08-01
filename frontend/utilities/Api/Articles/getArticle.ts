import { IArticle } from '../../../types/models';

type IGetArticleResponse = {
  article: IArticle;
};

const getArticle = (id: string): Promise<IGetArticleResponse> => {
  return fetch(`/wiki/${id}.json`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getArticle };
