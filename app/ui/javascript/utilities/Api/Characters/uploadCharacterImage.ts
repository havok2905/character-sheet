import { ICharacter } from '../../../types/models';

type IUploadCharacterImageResponse = {
  character: ICharacter;
};

const uploadCharacterImage = (id: string, data: FormData): Promise<IUploadCharacterImageResponse> => {
  return fetch(`/characters/${id}/upload_image.json`, {
    body: data,
    method: 'POST'
  }).then(response => response.json())
};

export { uploadCharacterImage };
