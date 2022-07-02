import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { SpellPage } from './SpellPage';

const spellPageBootstrapper = () => {
  const { container, root } = getReactRoot('spell-page-container');
  if (!container || !root) return;
  root.render(<SpellPage/>);
};

export { spellPageBootstrapper };