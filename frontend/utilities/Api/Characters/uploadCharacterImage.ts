import { authenticatedFetch2 } from '../authenticatedFetch2';
import { ICharacter } from '../../../types/models';

type IUploadCharacterImageResponse = {
  character: ICharacter;
};

const uploadCharacterImage = async (id: string, data: FormData): Promise<IUploadCharacterImageResponse> => {
  return authenticatedFetch2(`/api/characters/${id}/upload_image`, {
    body: data,
    method: 'POST'
  });
};

export { uploadCharacterImage };
