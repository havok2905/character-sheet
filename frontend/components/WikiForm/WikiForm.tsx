import React, { ReactElement, useEffect, useState } from 'react';
import { IArticle } from '../../types/models';
import { MarkdownEditor } from '../MarkdownEditor';
import { MarkdownPreview } from '../MarkdownPreview';
import { TagEditor } from '../TagEditor';

interface IWikiFormProps {
  article?: IArticle;
  handleSubmit: (article: IArticle) => void;
  handleSubmitButtonLabel: string;
}

const WikiForm = ({
  article,
  handleSubmit,
  handleSubmitButtonLabel
}: IWikiFormProps): ReactElement => {
  const [contentField, setContentField] = useState('');
  const [tagsField, setTagsField] = useState<string[]>([]);
  const [titleField, setTitleField] = useState('');

  useEffect(() => {
    if (article) {
      const {
        content,
        tags,
        title
      } = article;

      setContentField(content);
      setTagsField(tags);
      setTitleField(title);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    
    const article: IArticle = {
      content: contentField,
      tags: tagsField,
      title: titleField
    };

    handleSubmit(article);
  }

  return (
    <>
      <TagEditor
        onChange={(tags: string[]) => {setTagsField([...tags])}}
        onRemove={(tag: string) => {setTagsField(tagsField.filter(item => tag !== item))}}
        value={tagsField}/>
      <form onSubmit={onSubmit}>
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
          <button className="button button-green">
            {handleSubmitButtonLabel}
          </button>
        </fieldset>
      </form>
    </>
  )
};

export { WikiForm };
