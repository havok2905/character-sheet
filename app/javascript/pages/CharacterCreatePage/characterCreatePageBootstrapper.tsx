import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { CharacterCreatePage } from './CharacterCreatePage';

const characterCreatePageBootstrapper = () => {
  const { container, root } = getReactRoot('character-create-page-container');
  if (!container || !root) return;
  root.render(<CharacterCreatePage/>);
};

export { characterCreatePageBootstrapper };
