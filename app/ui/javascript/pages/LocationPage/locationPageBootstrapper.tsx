import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { LocationPage } from './LocationPage';

const locationPageBootstrapper = () => {
  const { container, root } = getReactRoot('location-page-container');
  if (!container || !root) return;
  root.render(<LocationPage/>);
};

export { locationPageBootstrapper };
