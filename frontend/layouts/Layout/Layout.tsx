import React, { ReactElement, ReactNode } from 'react';
import { DiceRoller } from '../../components/DiceRoller';

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
          <li><a href="/">Home</a></li>
          <li><a href="/characters">Characters</a></li>
          <li><a href="/creatures">Creatures</a></li>
          <li><a href="/factions">Factions</a></li>
          <li><a href="/magic_items">Magic Items</a></li>
          <li><a href="/locations">Locations</a></li>
          <li><a href="/spells">Spells</a></li>
          <li><a href="/wiki">Wiki</a></li>
        </ul>
      </nav>
      {children}
      <DiceRoller/>
      <div id="modal-root"></div>
      <div id="toast-collection-root"></div>
    </>
  );
};

export { Layout };
