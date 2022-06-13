type IUploadLocationSigilResponse = {
  location: IUploadLocationSigilResponseLocation;
};

type IUploadLocationSigilResponseLocation = {
  content: string;
  description: string;
  id: string;
  name: string;
};

const uploadLocationSigil = (id: string, data: FormData): Promise<IUploadLocationSigilResponse> => {
  return fetch(`/locations/${id}/upload_sigil.json`, {
    body: data,
    method: 'POST'
  })
  .then(response => response.json())
};

export {
  uploadLocationSigil
};