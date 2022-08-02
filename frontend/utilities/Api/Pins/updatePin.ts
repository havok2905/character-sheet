import { IPin } from '../../../types/models';

type IUpdatePinRequest = {
  pin: IPin;
};

type IUpdatePinResponse = {
  pin: IPin;
};

const updatePin = (id: string, data: IUpdatePinRequest): Promise<IUpdatePinResponse> => {
  return fetch(`/api/pins/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export { updatePin };
