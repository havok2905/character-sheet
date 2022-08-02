import { IArticle } from '../../../types/models';

type IUploadArticleHeroImageResponse = {
  article: IArticle;
};

const uploadArticleHeroImage = (id: string, data: FormData): Promise<IUploadArticleHeroImageResponse> => {
  return fetch(`/api/wiki/${id}/upload_hero_image`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadArticleHeroImage };
