import React, { ReactElement, useState } from 'react';
import { getUsers } from '../../utilities/Api/Users';
import { IUser } from '../../types/models';
import { LOGIN_ROUTE } from '../../app';
import { Navbar } from '../../components/Navbar/Navbar';
import { Navigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';

const UsersPage = (): ReactElement | null=> {
  const [users, setUsers] = useState<IUser[]>([]);

  const {authenticated, loading} = useAuth(() => {
    getUsers().then(data => setUsers(data.users))
  });

  if (loading) return null;
  if (!authenticated) return <Navigate replace to={LOGIN_ROUTE} />

  return (
    <>
      <Navbar authenticated={authenticated}/>
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
    </>
  );
};

export { UsersPage };
