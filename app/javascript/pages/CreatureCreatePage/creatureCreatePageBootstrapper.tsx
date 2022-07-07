import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { CreatureCreatePage } from './CreatureCreatePage';

const creatureCreatePageBootstrapper = () => {
  const { container, root } = getReactRoot('creature-create-page-container');
  if (!container || !root) return;
  root.render(<CreatureCreatePage/>);
};

export { creatureCreatePageBootstrapper };
