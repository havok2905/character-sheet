type IUploadLocationMapResponse = {
  location: IUploadLocationMapResponseLocation;
};

type IUploadLocationMapResponseLocation = {
  content: string;
  description: string;
  id: string;
  name: string;
};

const uploadLocationMap = (id: string, data: FormData): Promise<IUploadLocationMapResponse> => {
  return fetch(`/locations/${id}/upload_map.json`, {
    body: data,
    method: 'POST'
  })
  .then(response => response.json())
};

export {
  uploadLocationMap
};