import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { FactionsPage } from './FactionsPage';

const factionsPageBootstrapper = () => {
  const { container, root } = getReactRoot('factions-page-container');
  if (!container || !root) return;
  root.render(<FactionsPage/>);
};

export { factionsPageBootstrapper };
