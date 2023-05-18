interface ILoginRequest {
  username: string;
  password: string;
};

interface ILoginResponse {
  token: string;
};

const login = async (data: ILoginRequest): Promise<ILoginResponse> => {
  const response = await fetch('/auth/login', {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  });

  if (!response.ok) {
    throw new Error('Network server error');
  }
  
  return response.json();
};

export { login };
