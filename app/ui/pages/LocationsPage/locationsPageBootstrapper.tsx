import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { LocationsPage } from './LocationsPage';

const locationsPageBootstrapper = () => {
  const { container, root } = getReactRoot('locations-page-container');
  if (!container || !root) return;
  root.render(<LocationsPage />);
};

export { locationsPageBootstrapper };
