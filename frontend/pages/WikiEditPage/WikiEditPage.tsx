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
import { useParams } from "react-router-dom";
import { WikiForm } from '../../components/WikiForm';

interface IArticleEditPageState {
  article: IArticle | null;
}

const WikiEditPage = (): ReactElement | null => {
  const [state, setState] = useState<IArticleEditPageState>({ article: null });
  
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getArticle(params.id)
        .then((data) => {
          setState({ article: data.article });
        })
    }
  }, []);

  const { article } = state;

  if (!article) return null;

  const handleDelete = () => {
    if (params.id) {
      destroyArticle(params.id)
        .then(() => {
          window.location.href = '/wiki/';
        })
        .catch((error) => {
          console.error('Error:', error);
          window.location.href = `/wiki/${params.id}/edit/`;
        });
    }
  }

  const handleSubmit = (article: IArticle) => {
    if (params.id) {
      updateArticle(params.id, { article })
        .then(data => {
          window.location.href = `/wiki/${data.article.id}`;
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const handleHeroImageSubmit = (data: FormData | undefined) => {
    if (!data || !params.id) return;

    uploadArticleHeroImage(params.id, data)
      .then(data => {
        window.location.href = `/wiki/${data.article.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const { heroImageUrl } = article ?? {};

  return (
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
  );
};

export { WikiEditPage };
