import React from 'react';

const MarkdownEditor = ({
  onChange,
  value
}) => {
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
