import { authenticatedFetch } from '../authenticatedFetch';
import { IUser } from '../../../types/models';

type IGetUsersResponse = {
  users: IUser[];
};

const getUsers = (): Promise<IGetUsersResponse> => {
  return authenticatedFetch('/api/users', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  });
};

export { getUsers };
