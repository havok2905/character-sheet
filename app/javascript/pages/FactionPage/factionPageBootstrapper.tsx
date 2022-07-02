import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { FactionPage } from './FactionPage';

const factionPageBootstrapper = () => {
  const { container, root } = getReactRoot('faction-page-container');
  if (!container || !root) return;
  root.render(<FactionPage/>);
};

export { factionPageBootstrapper };
