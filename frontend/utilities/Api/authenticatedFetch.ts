import { clearToken, getToken } from '../Auth';

const authenticatedFetch = (
  url: string,
  options: any
) => {
  if (!options.headers) options.headers = {};

  options.headers['Authorization'] = getToken();

  return fetch(url, options)
    .then((response) => {
      if (response.status === 401) clearToken();
      return response.json();
    })
    .catch(() => {
      clearToken();
    });
};

export { authenticatedFetch };
