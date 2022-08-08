import React, { ReactElement } from 'react';
import { createArticle } from '../../utilities/Api/Articles';
import {
  generatePath,
  Link,
  useNavigate
} from 'react-router-dom';
import { IArticle } from '../../types/models';
import { WikiForm } from '../../components/WikiForm';
import { WIKI_ITEM_ROUTE, WIKI_ROUTE } from '../../app';

const WikiCreatePage = (): ReactElement => {
  const navigate = useNavigate();

  const handleSubmit = (article: IArticle) => {
    createArticle({ article })
      .then(data => {
        const id = data.article.id;
        navigate(generatePath(WIKI_ITEM_ROUTE, { id }));
      })
      .catch((error) => {
        console.error('Error:', error);
        location.reload();
      });
  };

  return (
    <div className="layout">
      <div className="full">
        <Link to={WIKI_ROUTE}>
          Back
        </Link>
        <h1>New Wiki Article</h1>
        <WikiForm
          handleSubmit={handleSubmit}
          handleSubmitButtonLabel="Create Wiki Article" />
      </div>
    </div>
  );
};

export { WikiCreatePage };
