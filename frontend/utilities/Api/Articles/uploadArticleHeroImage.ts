import { authenticatedFetch } from '../authenticatedFetch';
import { IArticle } from '../../../types/models';

type IUploadArticleHeroImageResponse = {
  article: IArticle;
};

const uploadArticleHeroImage = (id: string, data: FormData): Promise<IUploadArticleHeroImageResponse> => {
  return authenticatedFetch(`/api/wiki/${id}/upload_hero_image`, {
    body: data,
    method: 'POST'
  })
};

export { uploadArticleHeroImage };
