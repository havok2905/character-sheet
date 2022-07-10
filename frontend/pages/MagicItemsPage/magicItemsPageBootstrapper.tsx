import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { MagicItemsPage } from './MagicItemsPage';

const magicItemsPageBootstrapper = () => {
  const { container, root } = getReactRoot('magic-items-page-container');
  if (!container || !root) return;
  root.render(<MagicItemsPage/>);
};

export { magicItemsPageBootstrapper };
