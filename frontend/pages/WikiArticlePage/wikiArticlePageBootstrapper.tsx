import React from 'react';

import { getReactRoot } from '../utils/getReactRoot';
import { WikiArticlePage } from './WikiArticlePage';

const wikiArticlePageBootstrapper = () => {
  const { container, root } = getReactRoot('wiki-article-page-container');
  if (!container || !root) return;
  root.render(<WikiArticlePage/>);
};

export { wikiArticlePageBootstrapper };
