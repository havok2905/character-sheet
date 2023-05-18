import React, { ReactNode } from 'react';
import { getUsers } from '../../utilities/Api/Users';
import { LOGIN_ROUTE } from '../../app';
import { Navbar } from '../../components/Navbar/Navbar';
import { Navigate } from "react-router-dom";
import { useAuth } from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const UsersPage = (): ReactNode => {
  const authQuery = useAuth();

  const {
    data,
    isError,
    isLoading
  } = useQuery({
    queryFn: getUsers,
    queryKey: ['users']
  });

  if (
    authQuery.isLoading ||
    isError || isLoading
  ) return null;

  if (!authQuery.isSuccess) return <Navigate replace to={LOGIN_ROUTE} />

  const users = data.users ?? [];

  return (
    <>
      <Navbar authenticated={authQuery.isSuccess}/>
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
