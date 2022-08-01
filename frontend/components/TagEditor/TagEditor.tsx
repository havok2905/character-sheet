import React, { ReactElement, useState } from 'react';
import { TagList } from './TagList';
import './_tagEditor.scss';

interface ITagEditorProps {
  onChange: (tags: string[]) => void;
  onRemove: (tag: string) => void;
  value: string[];
}

const TagEditor = ({
  onChange,
  onRemove,
  value
}: ITagEditorProps): ReactElement => {
  const [newTag, setNewTag] = useState('');

  const handleTagEntry = e => {
    e.preventDefault();
    onChange([...new Set([...value, newTag])]);
    setNewTag('');
  };

  return (
    <form onSubmit={handleTagEntry}>
      <fieldset>
        <label htmlFor="wiki-article-tags">
          Tags
        </label>
        <input
          id="wiki-article-tags"
          name="wiki-article-tags"
          onChange={(e) => setNewTag(e.target.value)}
          value={newTag}
          type="text">  
        </input>
        <TagList tags={value} onRemove={onRemove}/>
      </fieldset>
    </form>
  )
};

export { TagEditor };
