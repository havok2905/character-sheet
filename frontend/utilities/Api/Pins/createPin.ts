import { authenticatedFetch } from '../authenticatedFetch';
import { IPin } from '../../../types/models';

type ICreatePinRequest = {
  pin: IPin;
};

type ICreatePinResponse = {
  pin: IPin;
};

const createPin = (data: ICreatePinRequest): Promise<ICreatePinResponse> => {
  return authenticatedFetch('/api/pins', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { createPin };
