import React, {
  ReactElement,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  destroyArticle,
  getArticle,
  updateArticle,
  uploadArticleHeroImage,
} from '../../utilities/Api/Articles';
import { IArticle } from '../../types/models';
import { Layout } from '../../layouts/Layout';
import { MarkdownEditor } from '../../components/MarkdownEditor';
import { MarkdownPreview } from '../../components/MarkdownPreview';
import { TagEditor } from '../../components/TagEditor';

const getIdFromUrl = ():string => {
  const url = new URL(window.location.href);
  const parts = url.pathname.split('/').filter(Boolean);
  return parts[1];
};

interface IArticleEditPageState {
  article: IArticle | null;
}

const WikiEditPage = (): ReactElement => {
  const [contentField, setContentField] = useState('');
  const [state, setState] = useState<IArticleEditPageState>({ article: null });
  const [tagsField, setTagsField] = useState<string[]>([]);
  const [titleField, setTitleField] = useState('');

  const heroImageFileUploadRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const id = getIdFromUrl();

    getArticle(id)
      .then((data) => {
        const { content, tags, title } = data.article;
        setState({ article: data.article });
        setContentField(content);
        setTagsField(tags);
        setTitleField(title);
      })
  }, []);

  const {
    article
  } = state;

  const handleDelete = e => {
    e.preventDefault();
    
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = getIdFromUrl();

    updateArticle(id, {
      article: {
        content: contentField,
        tags: tagsField,
        title: titleField
      }
    })
      .then(data => {
        window.location.href = `/wiki/${data.article.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleHeroImageSubmit = e => {
    e.preventDefault();

    const id = getIdFromUrl();
    const data = new FormData();
    const filesToUpload = heroImageFileUploadRef?.current?.files;

    if (!filesToUpload?.length) return;

    data.append('article-hero-image-file-upload', filesToUpload[0]);

    uploadArticleHeroImage(id, data)
      .then(data => {
        window.location.href = `/wiki/${data.article.id}`;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const {
    heroImageUrl,
    title = ''
  } = article ?? {};

  return (
    <Layout>
      <div className="layout">
        <div className="full">
          <h1>Edit Wiki Article</h1>
          <button className='button button-destructive' onClick={handleDelete}>
            Delete
          </button>
          <h2>Hero Image</h2>
          {heroImageUrl && <img src={heroImageUrl} alt={`${title} hero image`}/>}
          <form onSubmit={handleHeroImageSubmit}>
            <fieldset>
              <label htmlFor="article-hero-image">
                Hero Image
              </label>
              <input
                name="article-hero-image"
                id="article-hero-image"
                ref={heroImageFileUploadRef}
                type="file" />
              <button>
                Update Hero Image
              </button>
            </fieldset>
          </form>
          <TagEditor
            onChange={(tags: string[]) => {setTagsField([...tags])}}
            onRemove={(tag: string) => {setTagsField(tagsField.filter(item => tag !== item))}}
            value={tagsField}/>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="wiki-article-title">
                Title
              </label>
              <input
                id="wiki-article-title"
                name="wiki-article-title"
                onChange={(e) => setTitleField(e.target.value) }
                type="text"
                value={titleField}>  
              </input>
            </fieldset>
            <fieldset>
              <label htmlFor="wiki-article-content">
                Content
              </label>
              <MarkdownEditor
                onChange={(e) => {setContentField(e.target.value)}}
                value={contentField}
              />
              <MarkdownPreview value={contentField}/>
            </fieldset>
            <fieldset>
              <button>
                Update Wiki Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export { WikiEditPage };
