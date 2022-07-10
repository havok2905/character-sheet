import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { CharacterPage } from './CharacterPage';

const characterPageBootstrapper = () => {
  const { container, root } = getReactRoot('character-page-container');
  if (!container || !root) return;
  root.render(<CharacterPage/>);
};

export { characterPageBootstrapper };
