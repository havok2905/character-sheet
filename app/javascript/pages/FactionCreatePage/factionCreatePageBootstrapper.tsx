import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { FactionCreatePage } from './FactionCreatePage';

const factionCreatePageBootstrapper = () => {
  const { container, root } = getReactRoot('faction-create-page-container');
  if (!container || !root) return;
  root.render(<FactionCreatePage/>);
};

export { factionCreatePageBootstrapper };
