import React, { ReactElement, useState } from 'react';
import { createArticle } from '../../utilities/Api/Articles';
import { Layout } from '../../layouts/Layout';
import { MarkdownEditor } from '../../components/MarkdownEditor';
import { MarkdownPreview } from '../../components/MarkdownPreview';
import { TagEditor } from '../../components/TagEditor';

const WikiCreatePage = (): ReactElement => {
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    createArticle({
      article: {
        content,
        tags,
        title
      }
    })
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
          <TagEditor
            onChange={(tags: string[]) => {setTags([...tags])}}
            onRemove={(tag: string) => {setTags(tags.filter(item => tag !== item))}}
            value={tags}/>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor="wiki-article-title">
                Title
              </label>
              <input
                id="wiki-article-title"
                name="wiki-article-title"
                onChange={(e) => setTitle(e.target.value) }
                type="text">  
              </input>
            </fieldset>
            <fieldset>
              <label htmlFor="wiki-article-content">
                Content
              </label>
              <MarkdownEditor
                onChange={(e) => {setContent(e.target.value)}}
                value={content}
              />
              <MarkdownPreview value={content}/>
            </fieldset>
            <fieldset>
              <button>
                Create Wiki Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export { WikiCreatePage };
