type IAuthRequest = {
  token: string;
};

const auth = (data: IAuthRequest) => {
  return fetch('/auth/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export { auth };
