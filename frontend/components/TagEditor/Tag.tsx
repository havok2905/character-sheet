import React, { ReactElement } from 'react';
import './_tag.scss';

interface ITagProps {
  onRemove?: (tagName: string) => void;
  tagName: string;
}

const Tag = ({
  onRemove,
  tagName
}: ITagProps): ReactElement => {
  const onClick = e => {
    e.preventDefault();
    if (onRemove) onRemove(tagName);
  };

  return (
    <div className="tag">
      <span>{tagName}</span>
      {
        onRemove && (
          <button
            onClick={onClick}
            type="button">
            x
          </button>
        )
      }
    </div>
  );
};

export { Tag }
