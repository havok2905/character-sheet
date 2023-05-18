type IAuthRequest = {
  token: string;
};

const auth = async (data: IAuthRequest) => {
  const response = await fetch('/auth/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error('Network server error');
  }

  return response.json();
};

export { auth };
