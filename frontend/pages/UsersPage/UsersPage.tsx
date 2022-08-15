import React, { ReactElement, useEffect, useState } from 'react';
import { getUsers } from '../../utilities/Api/Users';
import { IUser } from '../../types/models';

const UsersPage = (): ReactElement => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    getUsers().then(data => setUsers(data.users));
  }, []);

  return (
    <div className="layout">
      <div className="full">
        <h1>Users</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                const {
                  firstName,
                  id,
                  lastName,
                  username
                } = user;

                return (
                  <tr>
                    <td>{id}</td>
                    <td>{username}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { UsersPage };
