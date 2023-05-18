import React, { ReactNode } from 'react';
import { CreaturesTable } from '../../components/CreaturesTable/CreaturesTable';
import { getCreatures } from '../../utilities/Api/Creatures';
import { CREATURE_CREATE_ROUTE } from '../../app';
import { Link } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { useAuth } from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const CreaturesPage = (): ReactNode => {
  const authQuery = useAuth();

  const {
    data,
    isError,
    isLoading
  } = useQuery({
    queryFn: getCreatures,
    queryKey: ['creatures']
  });

  if (isLoading || isError) return null;

  const creatures = data.creatures;

  return (
    <>
      <Navbar authenticated={authQuery.isSuccess}/>
      <div className="layout">
        <div className="full">
          {
            authQuery.isSuccess && (
              <Link
                className="button button-blue"
                to={CREATURE_CREATE_ROUTE}>
                Create
              </Link>
            )
          }
          <h1>Creatures</h1>
          <CreaturesTable creatures={creatures}/>
        </div>
      </div>
    </>
  );
};

export { CreaturesPage };
