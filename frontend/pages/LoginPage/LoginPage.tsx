import React, { FC, useState } from 'react';
import { login } from '../../utilities/Api/Auth';
import { setToken } from '../../utilities/Auth';
import { useMutation } from '@tanstack/react-query';

interface loginMutationRequest {
  password: string;
  username: string;
}

const LoginPage: FC = () => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useMutation({
    mutationFn: async ({ username, password }: loginMutationRequest) => login({ username, password }),
    onError: () => {
      setErrorMessages([ 'There was an error' ]);
    },
    onSuccess: (data) => {
      if (data.token) {
        setToken(data.token);
        window.location.pathname = '/';
      } else {
        setErrorMessages([ 'Incorrect username or password' ]);
      }
    }
  });

  const onUsernameChange = e => {
    setUsername(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    loginMutation.mutate({ password, username });
  }

  const getErrorMessages = () => {
    if (!errorMessages.length) return null;

    return (
      <ul>
        {errorMessages.map(error => <li>{error}</li>)}
      </ul>
    );
  };

  return (
    <div className="layout">
      <div className="full">
        <h1>Log in</h1>
        <form onSubmit={onSubmit}>
          <fieldset>
            <label>Username</label>
            <input
              onChange={onUsernameChange}
              type="text"
              value={username}/>
            <label>Password</label>
            <input
              onChange={onPasswordChange}
              type="password"
              value={password}/>
          </fieldset>
          <fieldset>
            <button className="button button-green">
              Log in
            </button>
          </fieldset>
        </form>
        {getErrorMessages()}
      </div>
    </div>
  );
};

export { LoginPage };