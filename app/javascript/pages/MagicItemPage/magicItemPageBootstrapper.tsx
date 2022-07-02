import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { MagicItemPage } from './MagicItemPage';

const magicItemPageBootstrapper = () => {
  const { container, root } = getReactRoot('magic-item-page-container');
  if (!container || !root) return;
  root.render(<MagicItemPage/>);
};

export { magicItemPageBootstrapper };
