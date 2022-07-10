import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { MagicItemCreatePage } from './MagicItemCreatePage';

const magicItemCreatePageBootstrapper = () => {
  const { container, root } = getReactRoot('magic-item-create-page-container');
  if (!container || !root) return;
  root.render(<MagicItemCreatePage/>);
};

export { magicItemCreatePageBootstrapper };
