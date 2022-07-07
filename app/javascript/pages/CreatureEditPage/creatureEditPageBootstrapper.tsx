import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { CreatureEditPage } from './CreatureEditPage';

const creatureEditPageBootstrapper = () => {
  const { container, root } = getReactRoot('creature-edit-page-container');
  if (!container || !root) return;
  root.render(<CreatureEditPage/>);
};

export { creatureEditPageBootstrapper };
