import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { WikiPage } from './WikiPage';

const wikiPageBootstrapper = () => {
  const { container, root } = getReactRoot('wiki-page-container');
  if (!container || !root) return;
  root.render(<WikiPage/>);
};

export { wikiPageBootstrapper };
