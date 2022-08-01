import React, { ReactElement } from 'react';
import { TagList } from '../TagEditor/TagList';
import './_wikiItem.scss';

interface IWikiItemProps {
  path: string;
  imagePath: string;
  tags: string[];
  title: string;
}

const WikiItem = ({
  path,
  imagePath,
  tags,
  title
}: IWikiItemProps): ReactElement => {
  return (
    <a className="wiki-item" href={path}>
      <img src={imagePath} />
      <div className="wiki-item-content">
        <h2>{title}</h2>
        <div className="wiki-item-tags">
          <TagList tags={tags}/>
        </div>
      </div>
    </a>
  );
};

export { WikiItem };
