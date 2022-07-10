import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { MagicItemEditPage } from './MagicItemEditPage';

const magicItemEditPageBootstrapper = () => {
  const { container, root } = getReactRoot('magic-item-edit-page-container');
  if (!container || !root) return;
  root.render(<MagicItemEditPage/>);
};

export { magicItemEditPageBootstrapper };
