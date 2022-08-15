import { authenticatedFetch } from '../authenticatedFetch';
import { ICharacter } from '../../../types/models';

type IUploadCharacterImageResponse = {
  character: ICharacter;
};

const uploadCharacterImage = (id: string, data: FormData): Promise<IUploadCharacterImageResponse> => {
  return authenticatedFetch(`/api/characters/${id}/upload_image`, {
    body: data,
    method: 'POST'
  })
};

export { uploadCharacterImage };
