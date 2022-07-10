import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { CharactersPage } from './CharactersPage';

const charactersPageBootstrapper = () => {
  const { container, root } = getReactRoot('characters-page-container');
  if (!container || !root) return;
  root.render(<CharactersPage/>);
};

export { charactersPageBootstrapper };
