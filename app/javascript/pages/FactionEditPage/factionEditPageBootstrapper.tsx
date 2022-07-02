import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { FactionEditPage } from './FactionEditPage';

const factionEditPageBootstrapper = () => {
  const { container, root } = getReactRoot('faction-edit-page-container');
  if (!container || !root) return;
  root.render(<FactionEditPage/>);
};

export { factionEditPageBootstrapper };
