import React, { ChangeEvent, ReactElement } from 'react';

type IMarkdownEditorProps = {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void,
  value: string;
};

const MarkdownEditor = ({
  onChange,
  value
}: IMarkdownEditorProps): ReactElement => {
  return (
    <textarea
      onChange={onChange}
      style={{ height: '500px' }}
      value={value}>
    </textarea>
  );
};

export { MarkdownEditor };
