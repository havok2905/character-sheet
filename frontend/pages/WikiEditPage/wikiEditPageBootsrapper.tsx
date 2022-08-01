import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { WikiEditPage } from './WikiEditPage';

const wikiEditPageBootstrapper = () => {
  const { container, root } = getReactRoot('wiki-edit-page-container');
  if (!container || !root) return;
  root.render(<WikiEditPage/>);
};

export { wikiEditPageBootstrapper };
