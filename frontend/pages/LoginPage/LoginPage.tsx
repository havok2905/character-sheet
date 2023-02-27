import React, { ReactElement, useState } from 'react';
import { login } from '../../utilities/Api/Auth';
import { setToken } from '../../utilities/Auth';

const LoginPage = (): ReactElement => {
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onUsernameChange = e => {
    setUsername(e.target.value);
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    
    login({
      username,
      password
    }).then(response => {
      if (response.token) {
        setToken(response.token);
        window.location.pathname = '/';
      } else {
        setErrorMessages([ 'Incorrect username or password' ]);
      }
    }).catch(() => {
      setErrorMessages([ 'There was an error' ]);
    });
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