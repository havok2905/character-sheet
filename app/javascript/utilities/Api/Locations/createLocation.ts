type ICreateLocationRequest = {
  location: ICreateLocationRequestLocation;
};

type ICreateLocationRequestLocation = {
  content: string;
  description: string;
  name: string;
};

type ICreateLocationResponse = {
  location: ICreateLocationResponseLocation;
};

type ICreateLocationResponseLocation = {
  content: string;
  description: string;
  id: string;
  name: string;
};

const createLocation = (data: ICreateLocationRequest): Promise<ICreateLocationResponse> => {
  return fetch('/locations.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
};

export {
  createLocation,
  ICreateLocationRequest,
  ICreateLocationResponse
};
