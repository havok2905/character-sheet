import { IPin } from '../../../types/models';

type ICreatePinRequest = {
  pin: IPin;
};

type ICreatePinResponse = {
  pin: IPin;
};

const createPin = (data: ICreatePinRequest): Promise<ICreatePinResponse> => {
  return fetch('/pins.json', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json());
};

export { createPin };
