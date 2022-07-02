import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { SpellEditPage } from './SpellEditPage';

const spellEditPageBootstrapper = () => {
  const { container, root } = getReactRoot('spell-edit-page-container');
  if (!container || !root) return;
  root.render(<SpellEditPage/>);
};

export { spellEditPageBootstrapper };