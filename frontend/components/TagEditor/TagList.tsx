import React, { ReactElement } from 'react';
import { Tag } from './Tag';
import './_tagList.scss';

interface ITagListProps {
  onRemove?: (tagName: string) => void;
  tags: string[];
}

const TagList = ({
  onRemove,
  tags
}: ITagListProps): ReactElement | null => {
  if (!tags.length) return null;

  return (
    <div className="tag-list">
      {
        tags.map(tag => (
          <Tag 
            tagName={tag}
            onRemove={onRemove}/>
        ))
      }
    </div>
  );
};

export { TagList }
