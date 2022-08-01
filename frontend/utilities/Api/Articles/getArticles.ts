import { IArticle } from '../../../types/models';

type IGetArticlesResponse = {
  articles: IArticle[];
};

const getArticles = (): Promise<IGetArticlesResponse> => {
  return fetch('/wiki.json', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.json());
};

export { getArticles };
