import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { CreaturesPage } from './CreaturesPage';

const creaturesPageBootstrapper = () => {
  const { container, root } = getReactRoot('creatures-page-container');
  if (!container || !root) return;
  root.render(<CreaturesPage/>);
};

export { creaturesPageBootstrapper };
