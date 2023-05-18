import { authenticatedFetch2 } from '../authenticatedFetch2';
import { IUser } from '../../../types/models';

interface IGetUsersResponse {
  users: IUser[];
};

const getUsers = async (): Promise<IGetUsersResponse> => {
  return authenticatedFetch2('/api/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'GET'
  });
};

export { getUsers };
