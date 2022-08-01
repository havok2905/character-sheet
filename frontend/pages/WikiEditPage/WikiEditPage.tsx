import React, { ReactElement, useEffect, useState } from 'react';
import { DeleteButton } from '../../components/DeleteButton';
import {
  destroyArticle,
  getArticle,
  updateArticle,
  uploadArticleHeroImage,
} from '../../utilities/Api/Articles';
import { IArticle } from '../../types/models';
import { ImageForm } from '../../components/ImageForm/ImageForm';
import { Layout } from '../../layouts/Layout';
import { WikiForm } from '../../components/WikiForm';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

interface IArticleEditPageState {
  article: IArticle | null;
}

const WikiEditPage = (): ReactElement | null => {
  const [state, setState] = useState<IArticleEditPageState>({ article: null });

  useEffect(() => {
    const id = getIdFromUrl();

    getArticle(id)
      .then((data) => {
        setState({ article: data.article });
      })
  }, []);

  const { article } = state;

  if (!article) return null;

  const handleDelete = () => {
    const id = getIdFromUrl();

    destroyArticle(id)
      .then(() => {
        window.location.href = '/wiki/';
      })
      .catch((error) => {
        console.error('Error:', error);
        window.location.href = `/wiki/${id}/edit/`;
      });
  }

  const handleSubmit = (article: IArticle) => {
    const id = getIdFromUrl();

    updateArticle(id, { article })
      .then(data => {
        window.location.href = `/wiki/${data.article.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleHeroImageSubmit = (data: FormData | undefined) => {
    const id = getIdFromUrl();

    if (!data || !id) return;

    uploadArticleHeroImage(id, data)
      .then(data => {
        window.location.href = `/wiki/${data.article.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const { heroImageUrl } = article ?? {};

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>Edit Wiki Article</h1>
          <DeleteButton
            buttonText="Delete Wiki Article"
            handleDelete={handleDelete}/>
          <h2>Hero Image</h2>
          <ImageForm
            buttonLabel="Update Hero Image"
            handleSubmit={handleHeroImageSubmit}
            imageUrl={heroImageUrl}
            inputName="article-hero-image-file-upload"/>
          <WikiForm
            article={article}
            handleSubmit={handleSubmit}
            handleSubmitButtonLabel="Update Wiki Article" />
        </div>
      </div>
    </Layout>
  );
};

export { WikiEditPage };
