import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { CreaturePage } from './CreaturePage';

const creaturePageBootstrapper = () => {
  const { container, root } = getReactRoot('creature-page-container');
  if (!container || !root) return;
  root.render(<CreaturePage/>);
};

export { creaturePageBootstrapper };
