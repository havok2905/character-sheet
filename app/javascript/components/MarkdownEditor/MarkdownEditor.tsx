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
    <div style={{ display: 'flex', justifyItems: 'space-between' }}>
      <textarea
        onChange={onChange}
        style={{ height: '500px', width: '49%' }}
        value={value}>
      </textarea>
    </div>
  );
};

export { MarkdownEditor };
