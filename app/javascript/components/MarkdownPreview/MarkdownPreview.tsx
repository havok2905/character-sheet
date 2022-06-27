import React, { 
  ReactElement,
  useEffect,
  useMemo,
  useState
} from 'react';
import Showdown from 'showdown';

type IMarkdownPreviewProps = {
  value: string;
};

const MarkdownPreview = ({ value }: IMarkdownPreviewProps): ReactElement => {
  const converter = useMemo(() => { 
    return new Showdown.Converter({
      strikethrough: true,
      tables: true
    })
  }, []);

  const [displayHtml, setDisplayHtml] = useState(converter.makeHtml(value));
  
  useEffect(() => {
    setDisplayHtml(converter.makeHtml(value));
  }, [value]);
  
  return (
    <article dangerouslySetInnerHTML={{ __html: displayHtml }}>
    </article>
  );
};

export { MarkdownPreview };
