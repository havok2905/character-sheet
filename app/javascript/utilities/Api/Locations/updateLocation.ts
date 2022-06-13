type IUpdateLocationRequest = {
  location: IUpdateLocationRequestLocation;
};

type IUpdateLocationRequestLocation = {
  content: string;
  description: string;
  name: string;
};

type IUpdateLocationResponse = {
  location: IUpdateLocationResponseLocation;
};

type IUpdateLocationResponseLocation = {
  content: string;
  description: string;
  id: string;
  name: string;
};

const updateLocation = (id: string, data: IUpdateLocationRequest): Promise<IUpdateLocationResponse> => {
  return fetch(`/locations/${id}.json`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
};

export {
  updateLocation,
  IUpdateLocationRequest,
  IUpdateLocationResponse
};