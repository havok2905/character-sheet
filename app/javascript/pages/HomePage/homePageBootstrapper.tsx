import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { HomePage } from './HomePage';

const homePageBootstrapper = () => {
  const { container, root } = getReactRoot('home-page-container');
  if (!container || !root) return;
  root.render(<HomePage/>);
};

export { homePageBootstrapper };
