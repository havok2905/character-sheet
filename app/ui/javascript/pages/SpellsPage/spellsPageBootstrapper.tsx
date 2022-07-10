import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { SpellsPage } from './SpellsPage';

const spellsPageBootstrapper = () => {
  const { container, root } = getReactRoot('spells-page-container');
  if (!container || !root) return;
  root.render(<SpellsPage/>);
};

export { spellsPageBootstrapper };