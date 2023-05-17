import { authenticatedFetch2 } from '../authenticatedFetch2';
import { IUser } from '../../../types/models';

interface IGetUsersResponse {
  users: IUser[];
};

const getUsers = async (): Promise<IGetUsersResponse> => {
  return authenticatedFetch2('/api/users', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getUsers };
