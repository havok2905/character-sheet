import React, { ReactElement, useEffect, useState } from 'react';
import { DeleteButton } from '../../components/DeleteButton';
import {
  destroyArticle,
  getArticle,
  updateArticle,
  uploadArticleHeroImage,
} from '../../utilities/Api/Articles';
import {
  generatePath,
  Link,
  useNavigate,
  useParams
} from 'react-router-dom';
import { IArticle } from '../../types/models';
import { ImageForm } from '../../components/ImageForm/ImageForm';
import { WikiForm } from '../../components/WikiForm';
import { WIKI_ITEM_ROUTE, WIKI_ROUTE } from '../../app';

interface IArticleEditPageState {
  article: IArticle | null;
}

const WikiEditPage = (): ReactElement | null => {
  const [state, setState] = useState<IArticleEditPageState>({ article: null });
  
  const navigate = useNavigate();
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

  const { heroImageUrl, id } = article ?? {};

  const handleDelete = () => {
    if (id) {
      destroyArticle(id)
        .then(() => {
          navigate(WIKI_ROUTE);
        })
        .catch((error) => {
          console.error('Error:', error);
          location.reload();
        });
    }
  }

  const handleSubmit = (article: IArticle) => {
    if (id) {
      updateArticle(id, { article })
        .then(() => {
          navigate(generatePath(WIKI_ITEM_ROUTE, { id }));
        })
        .catch((error) => {
          console.error('Error:', error);
          location.reload();
        });
    }
  };

  const handleHeroImageSubmit = (data: FormData | undefined) => {
    if (!data || !id) return;

    uploadArticleHeroImage(id, data)
      .then(() => {
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
        <Link to={generatePath(WIKI_ITEM_ROUTE, { id })}>
          Back
        </Link>
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
