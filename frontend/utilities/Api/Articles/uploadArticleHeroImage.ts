import { IArticle } from '../../../types/models';

type IUploadArticleHeroImageResponse = {
  article: IArticle;
};

const uploadArticleHeroImage = (id: string, data: FormData): Promise<IUploadArticleHeroImageResponse> => {
  return fetch(`/wiki/${id}/upload_hero_image.json`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadArticleHeroImage };
