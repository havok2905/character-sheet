import { clearToken, getToken } from '../Auth';

const authenticatedFetch2 = async (path: string, options: RequestInit): Promise<any> => {
  if (!options.headers) options.headers = {};

  options.headers['Authorization'] = getToken();

  const response = await fetch(path, options);

  if (response.status === 401) {
    clearToken();
  }

  if (!response.ok) {
    clearToken();
    throw new Error('Network server error');
  }

  return response.json();
};

export { authenticatedFetch2 };
