import React, { ReactElement, ReactNode } from 'react';
import { DmScreen } from '../../components/DmScreen';
import { DiceRoller } from '../../components/DiceRoller';
import {
  CHARACTERS_ROUTE,
  CREATURES_ROUTE,
  FACTIONS_ROUTE,
  LOCATIONS_ROUTE,
  MAGIC_ITEMS_ROUTE,
  ROOT_ROUTE,
  SPELLS_ROUTE,
  WIKI_ROUTE
} from '../../app';
import { Link } from 'react-router-dom';

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({
  children
}: ILayoutProps): ReactElement => {
  return (
    <>
      <nav>
        <ul className="bulletless-list">
          <li><Link to={`${ROOT_ROUTE}`}>Home</Link></li>
          <li><Link to={`${CHARACTERS_ROUTE}`}>Characters</Link></li>
          <li><Link to={`${CREATURES_ROUTE}`}>Creatures</Link></li>
          <li><Link to={`${FACTIONS_ROUTE}`}>Factions</Link></li>
          <li><Link to={`${MAGIC_ITEMS_ROUTE}`}>Magic Items</Link></li>
          <li><Link to={`${LOCATIONS_ROUTE}`}>Locations</Link></li>
          <li><Link to={`${SPELLS_ROUTE}`}>Spells</Link></li>
          <li><Link to={`${WIKI_ROUTE}`}>Wiki</Link></li>
        </ul>
      </nav>
      {children}
      <footer>
        <DmScreen/>
        <DiceRoller/>
      </footer>
      <div id="modal-root"></div>
      <div id="toast-collection-root"></div>
    </>
  );
};

export { Layout };
