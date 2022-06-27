import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { LocationEditPage } from './LocationEditPage';

const locationEditPageBootstrapper = () => {
  const { container, root } = getReactRoot('location-edit-page-container');

  if (!container || !root) return;

  root.render(
    <LocationEditPage/>
  );
};

export { locationEditPageBootstrapper };
