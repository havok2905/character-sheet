import React from 'react';
import {
  CHARACTERS_ROUTE,
  CREATURES_ROUTE,
  LOGIN_ROUTE,
  MAGIC_ITEMS_ROUTE,
  ROOT_ROUTE,
  SPELLS_ROUTE,
  USERS_ROUTE
} from '../../app';
import { clearToken } from '../../utilities/Auth';
import { Link } from 'react-router-dom';

interface INavbarProps {
  authenticated: boolean;
}

const Navbar = ({
  authenticated
}: INavbarProps) => {

  const clearAppToken = () => {
    clearToken();
    location.reload();
  };

  return (
    <nav>
      <ul className="bulletless-list">
        <li><Link to={`${ROOT_ROUTE}`}>Home</Link></li>
        <li><Link to={`${CHARACTERS_ROUTE}`}>Characters</Link></li>
        <li><Link to={`${CREATURES_ROUTE}`}>Creatures</Link></li>
        <li><Link to={`${MAGIC_ITEMS_ROUTE}`}>Magic Items</Link></li>
        <li><Link to={`${SPELLS_ROUTE}`}>Spells</Link></li>
        {
          authenticated && (
            <li><Link to={`${USERS_ROUTE}`}>Users</Link></li>
          )
        }
      </ul>
      {
        authenticated ? (
          <button
            className="button button-red"
            onClick={clearAppToken}>
            Log out
          </button>
        ) : (
          <Link to={`${LOGIN_ROUTE}`}>
            Log in
          </Link>
        )
      }      
    </nav>
  );
};

export {Navbar};
