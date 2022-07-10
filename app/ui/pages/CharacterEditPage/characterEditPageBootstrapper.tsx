import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { CharacterEditPage } from './CharacterEditPage';

const characterEditPageBootstrapper = () => {
  const { container, root } = getReactRoot('character-edit-page-container');
  if (!container || !root) return;
  root.render(<CharacterEditPage/>);
};

export { characterEditPageBootstrapper };
