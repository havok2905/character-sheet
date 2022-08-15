type IAuthRequest = {
  username: string;
  password: string;
};

type IAuthResponse = {
  token: string;
};

const auth = (data: IAuthRequest): Promise<IAuthResponse> => {
  return fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then((response) => {
    return response.json();
  });
};

export { auth };
