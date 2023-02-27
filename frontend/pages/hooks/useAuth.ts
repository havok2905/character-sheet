import {auth} from '../../utilities/Api/Auth';
import {getToken} from '../../utilities/Auth';
import {useEffect, useState} from 'react';

export const useAuth = (callback: () => void) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth({token: getToken()}).then((response) => {
      if (response.ok) {
        setAuthenticated(true);
        if (callback) {
          callback();
        }
      }
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  return {
    authenticated,
    loading
  };
};
