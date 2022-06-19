import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { LocationMapSettingsPage } from './LocationMapSettingsPage';

const locationMapSettingsPageBootstrapper = () => {
  const { container, root } = getReactRoot('location-map-settings-page-container');

  if (!container || !root) return;

  root.render(
    <LocationMapSettingsPage/>
  );
};

export { locationMapSettingsPageBootstrapper };
