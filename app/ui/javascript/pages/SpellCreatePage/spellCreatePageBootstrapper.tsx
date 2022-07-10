import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { SpellCreatePage } from './SpellCreatePage';

const spellCreatePageBootstrapper = () => {
  const { container, root } = getReactRoot('spell-create-page-container');
  if (!container || !root) return;
  root.render(<SpellCreatePage/>);
};

export { spellCreatePageBootstrapper };