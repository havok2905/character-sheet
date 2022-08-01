import React, { ReactElement } from 'react';
import { createArticle } from '../../utilities/Api/Articles';
import { IArticle } from '../../types/models';
import { Layout } from '../../layouts/Layout';
import { WikiForm } from '../../components/WikiForm';

const WikiCreatePage = (): ReactElement => {
  const handleSubmit = (article: IArticle) => {
    createArticle({ article })
      .then(data => {
        window.location.href = `/wiki/${data.article.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = '/wiki/new';
      });
  };

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>New Wiki Article</h1>
          <WikiForm
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Create Wiki Article" />
        </div>
      </div>
    </Layout>
  );
};

export { WikiCreatePage };
