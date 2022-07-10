import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { LocationCreatePage } from './LocationCreatePage';

const locationCreatePageBootstrapper = () => {
  const { container, root } = getReactRoot('location-create-page-container');
  if (!container || !root) return;
  root.render(<LocationCreatePage/>);
};

export { locationCreatePageBootstrapper };
