import { auth } from '../../utilities/Api/Auth';
import { getToken } from '../../utilities/Auth';
import { useQuery } from '@tanstack/react-query';

export const useAuth = () => {
  return useQuery({
    cacheTime: 0,
    queryFn: async () => auth({ token: getToken() }),
    queryKey: ['auth'],
    retry: false
  });
};
