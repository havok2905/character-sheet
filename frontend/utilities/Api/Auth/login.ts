type ILoginRequest = {
  username: string;
  password: string;
};

type ILoginResponse = {
  token: string;
};

const login = (data: ILoginRequest): Promise<ILoginResponse> => {
  return fetch('/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then((response) => {
    return response.json();
  });
};

export { login };
