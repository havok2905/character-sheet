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
  return fetch('/wiki.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export {
  createArticle,
  ICreateArticleRequest
};
