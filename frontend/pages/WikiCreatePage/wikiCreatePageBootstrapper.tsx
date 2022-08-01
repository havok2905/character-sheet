import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { WikiCreatePage } from './WikiCreatePage';

const wikiCreatePageBootstrapper = () => {
  const { container, root } = getReactRoot('wiki-create-page-container');
  if (!container || !root) return;
  root.render(<WikiCreatePage/>);
};

export { wikiCreatePageBootstrapper };
